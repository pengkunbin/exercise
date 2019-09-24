/**
 * 第二版
 * 处理无限调用then的问题
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
    } else if (this.state === 'fulfilled') {
        callback(this.value)
    } else if (this.state === 'rejected') {
        callback(this.reason)
    }
}