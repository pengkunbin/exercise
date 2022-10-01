class LUPrefix {
    private videoList: number[];
    private length: number;

    constructor(n: number) {
        this.videoList = Array<number>(n).fill(0)
        this.length = 0;
    }

    upload(video: number): void {
        this.videoList[video - 1] = 1;
        if (video === this.length + 1) {
            for (let i = video - 1; i < this.videoList.length; i++) {
                if (this.videoList[i] !== 1) {
                    break;
                }
                this.length++;
            }
        }
    }

    longest(): number {
        return this.length;
    }
}

const l = new LUPrefix(10);
const testlist = [[], [1], [2], [3], [4], [5], [6], [8], [7], [10], [9]]
testlist.forEach(test => {
    if (test.length !== 0) {
        l.upload(test[0])
    }
})
l.longest();
