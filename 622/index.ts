class MyCircularQueue {
    private circularQueue: number[] = [];
    private maxLength = 0;
    constructor(k: number) {
        this.circularQueue = [];
        this.maxLength = k;
    }

    enQueue(value: number): boolean {
        if (this.circularQueue.length >= this.maxLength) {
            return false;
        }
        this.circularQueue.push(value)
        return true;
    }

    deQueue(): boolean {
        if(this.circularQueue.length === 0){
            return false
        }
        this.circularQueue.splice(0, 1);
        return true
    }

    Front(): number {
        const result = this.circularQueue[0];
        if(result === undefined){
            return -1
        }
        return result;
    }

    Rear(): number {
        const result = this.circularQueue[this.maxLength - 1] || this.circularQueue[this.circularQueue.length - 1]
        if(result === undefined){
            return -1
        }
        return result
    }

    isEmpty(): boolean {
        return this.circularQueue.length === 0
    }

    isFull(): boolean {
        return this.circularQueue.length === this.maxLength
    }
}