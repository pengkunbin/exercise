class Vue {
    constructor(options) {
        this.data = options.data
        observer(this.data)
    }
}

const observer = function (obj) {
    Object.keys(obj).forEach((key) => {
        observable(obj, key, obj[key])
    })
}

const observable = function (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val
        },
        set: function (newVal) {
            if (newVal == val) return;
            val = newVal
            console.log('更新成功 newData:' + val)
        }
    })
}


const o = new Vue({
    data: {
        text: 'hi',
        test: 'success'
    }
})

o.data.test = "hello,world."