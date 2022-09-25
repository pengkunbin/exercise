function Queue() {
    this.taskQueue = []
}

Queue.prototype.start = async function () {
    for (let i = 0; i < this.taskQueue.length; i++) {
        await Queue.prototype.wait(this.taskQueue[i].time)
        this.taskQueue[i].func()
    }
}
Queue.prototype.task = function (time, callback) {
    this.taskQueue.push({
        time: time,
        func: callback
    })
}

Queue.prototype.wait = function (time) {
    return new Promise((res) => {
        setTimeout(res, time)
    })
}


let q = new Queue()
q.task(1000, () => {
    console.log(1)
})
q.task(2000, () => {
    console.log(2)
})
q.task(1000, () => {
    console.log(3)
})
q.start()