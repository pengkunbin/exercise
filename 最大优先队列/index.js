    class PriorityQueue {
        constructor() {
            this.items = []
        }

        enqueue(element, priority) {
            let obj = {
                'element': element,
                'priority': priority
            }
            let flag = false
            if (this.items) {
                for (let i in this.items) {
                    if (priority > this.items[i].priority) {
                        this.items.splice(i, 0, obj)
                        flag = !flag
                        break
                    }
                }
                if (!flag) {
                    this.items.push(obj)
                }
            } else {
                this.items.push(obj)
            }
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
        print() {
            for (let i in this.items) {
                console.log(`data:${this.items[i].element},priority:${this.items[i].priority}`)
            }
        }
    }

    let demo = new PriorityQueue()
    demo.enqueue('s', 5)
    demo.enqueue('k', 4)
    demo.enqueue('b', 6)
    demo.print()