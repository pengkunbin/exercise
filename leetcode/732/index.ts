class MyCalendarThree {
    private map: Map<number, number>;
    constructor() {
        this.map = new Map();
    }

    book(start: number, end: number): number {
        let ans = 0;
        let sum = 0;
        this.map.set(start, (this.map.get(start) || 0) + 1);
        this.map.set(end, (this.map.get(end) || 0) - 1);
        // 按照start进行排序
        const arr = Array.from(this.map.entries()).sort((a, b) => a[0] - b[0]);
        for (let [key, value] of arr) {
            sum += value;
            ans = Math.max(ans, sum);
        }
        return ans;
    }
}