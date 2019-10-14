const update = function (value) {
    console.log(`view had updated to ${value}`)
}

const observable = function (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function getter() {
            return val
        },
        set: function setter(newVal) {
            if (newVal === val) {
                return
            }
            val = newVal
            update(newVal)
        }
    })
}

const observe = function (obj) {
    Object.keys(obj).forEach((value, index) => {
        if (Object.prototype.toString.call(value) === '[object Object]') {
            observe(value)
        }
        observable(obj, index, value)
        return
    })
}

class Vue {
    constructor(options) {
        this._data = options.data
        observer(this._data)
    }


}

const view = new Vue({
    data: {
        text1: "I am iron man",
        text2: "I am spider man"
    },
    template: `
        <div>
            <p>{{text1}}<p>
            <p>{{text2}}<p>
            <p><p>
        </div>
    `
})