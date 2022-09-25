class SingleDog {
    constructor() {
        this.map = new Map()
    }

    static getInstance() {
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }

    set(url, context) {
        const timestamp = 23165471   //当前时间戳
        if ((this.map.has(url) && timestamp - this.map.get(url).timestamp > 3600) || !this.map.has(url)){
            this.map.set(url, { context, timestamp })
        }
    }

    get(url) {
        return this.map.get(url)
    }

}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

s1 === s2
