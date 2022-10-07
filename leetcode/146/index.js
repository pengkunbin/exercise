const LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
}

LRUCache.prototype.get = function (key) {
    const val = this.map.get(key)
    if (val) {
        this.map.delete(key)
        this.map.set(key, val)
        return val
    } else {
        return -1
    }
}

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    this.map.set(key, value)
    let keys = this.map.keys()
    while (this.map.size > this.capacity) {
        this.map.delete(keys.next().value)
    }
}


const cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2)
cache.get(1)       // 返回  1
cache.put(3, 3)    // 该操作会使得密钥 2 作废
cache.get(2)       // 返回 -1 (未找到)
cache.put(4, 4)    // 该操作会使得密钥 1 作废
cache.get(1)       // 返回 -1 (未找到)
cache.get(3)       // 返回  3
cache.get(4)       // 返回  4
