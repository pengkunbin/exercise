class MinStack {
    stack: Array<number>
    minStack: Array<number>

    constructor() {
        this.stack = [];
        // 在存储数据的栈外，再新建一个栈，用于存储最小值
        this.minStack = [Infinity];
    }

    push(x: number): void {
        this.stack.push(x);
        let minNum = Math.min(this.minStack[this.minStack.length - 1], x)
        this.minStack.push(minNum);
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    min(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
