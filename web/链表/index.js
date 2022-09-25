class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.count = 0
        this.head = null
    }

    append(element) {
        const node = new Node(element, null)
        let currentNode
        if (!this.head) {
            this.head = node
        } else {
            currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.count++
    }
    remove(element){
        if(this.head )
    }
}