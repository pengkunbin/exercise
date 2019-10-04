async function async1() {
    console.log('start')
    await async2()
    console.log('end')
}
async function async2() {
    console.log('helloworld')
}

async1()




const promise1 = function () {
    return new Promise((resolve, reject) => {
        console.log('start')
        promise2().then(() => {
            console.log('end')
            resolve()
        })
    })
}

const promise2 = function () {
    return new Promise((resolve, reject) => {
        console.log('helloworld')
        resolve()
    })
}

promise1()