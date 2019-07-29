class Stack {
    constructor() {
        this.items = []
    }
    push(data) {
        this.items.push(data)
    }
    pop() {
        return this.items.pop()
    }
    get peek() {
        return this.items[this.items.length - 1]
    }
    get isEmpty() {
        return !this.items.length
    }
    get size() {
        return this.item.length
    }
    clear() {
        this.items = []
    }
    print() {
        console.log(this.items.toString())
    }
}