const Node = function () {
    this.data = value
    this.previous = null
    this.next = null
}

const doublyList = function () {
    this._length = 0
    this.head = null
    this.tail = null
}

doublyList.prototype.add = function (value) {
    const node = new Node(value)
    if (this._length) {
        //将新节点加到尾部，并且新节点头部指向之前尾部的节点
        this.tail.next = node
        node.previous = this.tail
        //重新标记tail
        this.tail = node
    } else {
        //head tail只是一个标志位
        this.head = node
        this.tail = node
    }
    this._length++
}