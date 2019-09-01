/**
 * 单位为字节格式为 MB 输出
 */
const format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

/**
 * 封装 print 方法输出内存占用信息 
 */
const print = function () {
    const memoryUsage = process.memoryUsage();

    console.log(JSON.stringify({
        rss: format(memoryUsage.rss),
        heapTotal: format(memoryUsage.heapTotal),
        heapUsed: format(memoryUsage.heapUsed),
        external: format(memoryUsage.external),
    }));
}

/**
 * 我们通过Quantity创建一个很大的数组
 * @param {Number} num 
 */
function Quantity(num) {
    if (num) {
        return new Array(num * 1024 * 1024)
    }
    return num
}

/**
 * 我们通过Quantity创建一个很大的数组
 * @param {String} name
 * @param {Name} quantity 
 */
function Fruit(name, quantity) {
    this.name = name
    this.quantity = new Quantity(quantity)
}

let apple = new Fruit('apple')
print()
let banana = new Fruit('banana', 20)
print()
banana = null
global.gc()
print()



