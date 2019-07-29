class Queue {
    constructor() {
        this.items = []
    }
    enqueue(data) {
        this.items.push(data)
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    clear() {
        this.items = []
    }
    get size() {
        return this.items.length
    }
    get isEmpty() {
        return !this.items.length
    }
    print() {
        console.log(this.items.toString())
    }
}

class LoopQueue extends Queue {
    constructor(items) {
        super(items)
    }
    //循环队列有点问题
    getIndex(index) {
        const length = this.items.length
        return index > length ? (index % length) : index
    }

    find(index) {
        return index > length ? this.items[index % length] : this.items[index]
    }
}