//循环渐进实现

//第一版
const Promise = function (executor) {
    let _ = this
    _.value = undefined
    _.reason = undefined
    _.state = 'pending'
    function resolve(value) {
        _.value = value
        _.state = 'fulfilled'
    }
    function reject(reason) {
        _.reason = reason
        _.state = 'rejected'
    }
    executor(resolve, reject)
}

//e.g
const agree = new Promise((resolve, reject) => {
    resolve("我开心就同意了");//
})

const disagree = new Promise((resolve, reject) => {
    reject("我不开心就拒绝了");
})

const noResult = new Promise((resolve, reject) => { })

console.log(Iagree.state, Idisagree.state, noResult.state)

//增加通过.then调用的函数
Promise.prototype.then = function (callback) {
    if (this.state === 'pending') {
        return 'pending'
    } else if (this.state === 'fulfilled') {
        callback(this.value)
    } else if (this.state === 'rejected') {
        callback(this.reason)
    }
}