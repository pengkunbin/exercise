const mySetInterval = (cb, time) => {
    const fn = () => {
        cb() // 执行传入的回调函数
        setTimeout(() => {
            fn() // 递归调用自己
        }, time)
    }
    setTimeout(fn, time)
}

mySetInterval(() => {
    console.log(new Date())
}, 1000)