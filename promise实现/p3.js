//支持链式调用

const Promise = function (executor) {
    let _ = this
    _.value = undefined
    _.reason = undefined
    _.states = 'pending'

    _.resolveCallbacks = []
    _.rejectCallbacks = []

    function resolve(value) {
        _.value = value
        _.states = 'fulfilled'
        //轮流执行
        _.resolveCallbacks.forEach(callback => {
            callback()
        });
    }
    function reject(reason) {
        _.reason = reason
        _.states = 'rejected'
        //轮流执行
        _.rejectCallbacks.forEach(callback => {
            callback()
        });
    }

    executor(resolve, reject)
}

Promise.prototype.then = function (callback) {
    const _ = this
    let promise2 

    function resolveFunction(promise, resolve, reject) {
        const x = callback(_.value)
        resolvePromise(promise, x, resolve, reject)
    }

    function rejectFunction(promise, resolve, reject) {
        const x = callback(_.reason)
        resolvePromise(promise, x, resolve, reject)
    }

    promise2 = new Promise((resolve, reject) => {
        if (_.state == "pending") {
            //把回调方法塞进队列中
            _.resolveCallbacks.push(() => {
                resolveFunction(promise2, resolve, reject)
            })
            _.rejectCallbacks.push(() => {
                rejectFunction(promise2, resolve, reject)
            })
        }
        if (_.state == "fulfilled") {
            resolveFunction(promise2, resolve, reject)
        }
        if (_.state == "rejected") {
            rejectFunction(promise2, resolve, reject)
        }
    })
    return promise2
}


function resolvePromise(promise, x, resolve, reject) {
    //如果x可能是一个promise
    if (x !== null && (typeof x === "object" || typeof x === "function")) {
        let then = x.then;
        //如果x是一个promise，因为promise都要有then函数的
        if (typeof then === "function") {
            //y表示x这个promise的值
            then.call(x, y => {
                //继续遍历，直至返回值不是promise
                resolvePromise(promise, y, resolve, reject)
            }, err => {
                reject(err)
            })
        } else {
            //如果x是个普通对象，直接运行
            resolve(x)
        }
    } else {
        //如果x不是一个promise，也就是x是一个常量，直接运行
        resolve(x)
    }
}

//e.g
let Iagree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("我开心就同意了");
    }, 1000)
})

//为了防止多次then，所以回调方法需要丢入队列中，防止方法被覆盖。
Iagree.then((data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("看心情干活");
        }, 1000)
    })
}).then((data) => {
    console.log("前方返回一个promise：" + data)
    return data + "，我是一个常量"
}).then((data) => {
    console.log("常量返回：" + data)
}).then((data) => {
    console.log("前方无法返回：" + data)
})

