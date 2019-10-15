function wait(seconds) {
    return new Promise((res) => {
        setTimeout(res, seconds);
    });
}

function repeat(func, times, s) {
    return async function (...args) {
        for (let i = 0; i < times; i++) {
            await wait(s);
            func.apply(null, args);
        }
    };

    
}

const log = console.log
const repeatFunc = repeat(log, 4, 3000)

console.log('delayStart')
async function main() {
    for (let i = 0; i < 3; i++) {
        await repeatFunc('HelloWorld')
        //模拟一次发多条信息的情况
        if (i === 2) {
            await repeatFunc('HelloWorld555')
            await repeatFunc('WorldHello555')
        }
    }
}

main()
console.log('delayEnd')
