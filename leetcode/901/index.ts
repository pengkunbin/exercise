class StockSpanner {
    private stack: number[][];
    private idx: number;
    constructor() {
        this.stack = [];
        this.stack.push([-1, Number.MAX_VALUE]);
        this.idx = -1;
    }

    next(price: number): number {
        this.idx++;
        while (price >= this.stack[this.stack.length - 1][1]) {
            this.stack.pop();
        }
        let ret = this.idx - this.stack[this.stack.length - 1][0];
        this.stack.push([this.idx, price]);
        console.log("stack", this.stack, ret)
        return ret;
    }
}

const s = new StockSpanner();
console.log(s.next(29), s.next(91), s.next(62), s.next(76), s.next(51))
