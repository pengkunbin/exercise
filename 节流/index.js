const throttle = (fn, delay = 500) => {
    let flag = true
    return (...arg) => {
        if (!flag) {
            return
        } else {
            flage = false
            setTimeout(() => {
                fn.apply(this,arg)
                flag = true
            }, delay)
        }
    }
}