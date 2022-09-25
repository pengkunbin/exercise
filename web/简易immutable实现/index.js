const createState = function (target) {
    this.modified = false
    this.target = target
    this.copy = undefined
}
console.log(createState.prototype)

createState.prototype = {
    get: function (key) {
        if (!this.modified) {
            return this.target[key]
        }
        return this.copy[key]
    },
    set: function (key, value) {
        if (!this.modified) {
            this.markChanged()
        }
        return this.copy[key] = value
    }
    markChanged: function () {
        if (!this.modified) {
            this.modified = true
            this.copy = shallowCopy(this.target)
        }
    }
}

function shallowCopy(value) {
    if (Array.isArray(value)) {
        return value.slice()
    }
    if (value.__proto__ === undefined) {
        return Object.assign(Object.create(null), value)
    }
    return Object.assign({}, value)
}

const PROXY_STATE = Symbol('proxy-state')

const handler = {
    get(target, key) {
        if (key === PROXY_STATE) {
            return target
        }
        return target.get(key)
    }
    set(target, key, value) {
        return target.set(key, value)
    }
}

function produce(state, producer) {
    const store = new createState(state)
    const proxy = new Proxy(store, handler)
    producer(proxy)
    const newState = proxy[PROXY_STATE]
    if (newState.modified) {
        return newState.copy
    }
    return newState.target
}



//demo
const baseState = [
    {
        todo: 'Learn typescript',
        done: true,
    },
    {
        todo: 'Try immer',
        done: false,
    },
];

const nextState = produce(baseState, draftState => {
    draftState.push({ todo: 'Tweet about it', done: false });
    draftState[1].done = true;
});

console.log(baseState, nextState);