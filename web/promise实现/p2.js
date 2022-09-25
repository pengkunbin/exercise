/**
 * 第二版
 * 处理异步调用的问题
 * 创建两个
 * @param {callback} executor 
 */

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
    if (this.state === 'pending') {
        this.resolveCallbacks.push(() => {
            callback(this.value)
        })
        this.rejectCallbacks.push(() => {
            callback(this.reason)
        })
    } else if (this.states === 'fulfilled') {
        callback(this.value)
    } else if (this.states === 'rejected') {
        callback(this.reason)
    }
}

let Iagree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("我开心就同意了");
    }, 1000)
})

Iagree.then((res) => {
    console.log(res,Iagree.states)
})

Iagree.then((res) => {
    console.log(Iagree.states + 1)
})