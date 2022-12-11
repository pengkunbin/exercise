class CQueue {
    private stack1: number[];

    constructor() {
        this.stack1 = [];
    }

    appendTail(value: number): void {
        this.stack1.push(value);
    }

    deleteHead(): number {
        const head = this.stack1.shift();
        return head ? head : -1;
    }
}