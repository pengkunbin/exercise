class SummaryRanges {
    data: number[][] = []
    constructor() { }

    insert(val: number): void {
        for (let i = 0; i < this.data.length; i++) {
            const [start, end] = this.data[i]
            if (val >= start && val <= end) return // 如果在区间内则直接返回
            // 如果不在区间内
            // a. 与头相连
            // b. 与尾相连
            // 遍历完所有，都不相连，则自己成为一组
            if (val === start - 1) {
                this.data[i][0] = val
                return
            }

            if (val === end + 1) {
                this.data[i][1] = val
                return
            }
        }

        this.data.push([val, val])
    }

    addNum(val: number): void {
        this.insert(val) // 插入
        this.data.sort((a, b) => a[0] - b[0]) // 重排
        const temp = [...this.data]
        for (let i = 0; i < this.data.length - 1; i++) {
            const end = this.data[i][1]
            const nextStart = this.data[i + 1][0]

            if (end + 1 === nextStart) {
                temp.splice(i, 2, [this.data[i][0], this.data[i + 1][1]])
            }
        }

        this.data = temp
    }

    getIntervals(): number[][] {
        return this.data
    }
}
