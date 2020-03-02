  
const express = require('express');
const BitcoinRpc = require("bitcoin-rpc-promise");
const http = require('http');
const socketIO = require('socket.io');
const redis = require("redis");
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {path: '/half'})

let clients = 0;

let halvingStats = {
    height: 0,
    interval: 0,
    time:0,
    hashrate: 0,
    txcount: 0,
    size: 0
}


let statsHistory = {},
    infoHistory = {};

const sub = redis.createClient(6379, '10.142.0.4')
const pub = redis.createClient(6379, '10.142.0.4')
sub.get("btc-stats-data", function (err, value){
    console.log("Redis get btc-stats-data: " + value)
    statsHistory = JSON.parse(value)
})

sub.get("btc-24h-info", async function (err, value){
    console.log("Redis get btc-24h-info: " + value)
    infoHistory = JSON.parse(value)
    halvingStats.height = statsHistory.height;
    halvingStats.time = statsHistory.time;
    halvingStats.interval = infoHistory.averageBlockInterval;
    halvingStats.hashrate = infoHistory.averageBlockHashRate;
    let blockId = await rpc.call('getblockhash', halvingStats.height);
    let block = await rpc.call('getblock', blockId, 1);
    halvingStats.txcount = block.nTx;
    halvingStats.size = block.size;
    pub.set("halving-info", JSON.stringify(halvingStats),function (err,res) {
        if(err){
            console.log("error: " + err.toString())
        } else {
            console.log("set message halvingStats in halving-info:    success")
            console.log(halvingStats)
            console.log(res)
        }
    });
    pub.publish("btc-halving-channel", JSON.stringify(halvingStats),function (err,result) {
            if(err){
                console.log("error: " + err.toString())
            } else {
                console.log("publish halvingData to btc-halving-channel success");
                console.log("结束的时间是：" + Date.now())
            }
        }
    )
})

io.on('connection', socket => {
    console.log("connect id 是");
    console.log(socket.handshake.headers.origin);
    console.log("socket.io clients " + ++clients);
    socket.emit('halving', JSON.stringify(halvingStats));
    //  待添加新模块数据
    socket.on('disconnect', () => {
        console.log('socket.io clients disconnect ');
        console.log(socket.handshake.headers.origin);
        console.log("socket.io clients " + --clients);
    })
});

const port = 12260 + parseInt(process.env.NODE_APP_INSTANCE)
server.listen(port, () => console.log(`Listening on port ${port}`))

const redisSub = redis.createClient(6379, '10.142.0.4')
redisSub.subscribe("btc-data-channel");
redisSub.on("message", function (channel, message) {
    console.log("Redis channel " + channel + ": " + message);
    if(message === 'stats') {
        sub.get("btc-stats-data", async function (err, value){
            console.log("Redis get btc-stats-data: " + value)
            statsHistory = JSON.parse(value);
            halvingStats.height = statsHistory.height;
            halvingStats.time = statsHistory.time;
            let blockId = await rpc.call('getblockhash', halvingStats.height);
            let block = await rpc.call('getblock', blockId, 1);
            halvingStats.txcount = block.nTx;
            halvingStats.size = block.size;
            pub.set("halving-info", JSON.stringify(halvingStats),function (err,res) {
                if(err){
                    console.log("error: " + err.toString())
                } else {
                    console.log("set message halvingStats in halving-info:    success")
                    console.log(halvingStats)
                    console.log(res)
                }
            });
            pub.publish("btc-halving-channel", JSON.stringify(halvingStats),function (err,result) {
                    if(err){
                        console.log("error: " + err.toString())
                    } else {
                        console.log("publish halvingData to btc-halving-channel success");
                        console.log("结束的时间是：" + Date.now())
                    }
            });
            io.sockets.emit('halving', JSON.stringify(halvingStats));
        });
    } else if(message === 'info'){
        sub.get("btc-24h-info", function (err, value){
            console.log("Redis get btc-24h-info: " + value)
            infoHistory = JSON.parse(value);
            halvingStats.hashrate = infoHistory.averageBlockHashRate;
            halvingStats.interval = infoHistory.averageBlockInterval;
            pub.set("halving-info", JSON.stringify(halvingStats),function (err,res) {
                if(err){
                    console.log("error: " + err.toString())
                } else {
                    console.log("set message halvingStats in halving-info:    success")
                    console.log(halvingStats)
                    console.log(res)
                }
            });
            pub.publish("btc-halving-channel", JSON.stringify(halvingStats),function (err,result) {
                    if(err){
                        console.log("error: " + err.toString())
                    } else {
                        console.log("publish halvingData to btc-halving-channel success");
                        console.log("结束的时间是：" + Date.now())
                    }
            });
            io.sockets.emit('halving', JSON.stringify(halvingStats));
        });
    }
});