const promiseAll = function (queue) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(queue)) {
            return reject('target is not a array')
        } else {
            let count = 0
            const size = queue.length
            let arry = new Array(size)
            for (let i = 0; i < size; i++) {
                // (function (i) {
                    Promise.resolve(queue[i]).then(res => {
                        count++
                        arry[i] = res
                        if (count == size) {
                            return resolve(arry)
                        }
                    }, function (reason) {
                        return reject(reason)
                    })
                // })(i)
            }
        }
    })
}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

promiseAll([p1, p2, p3]).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})