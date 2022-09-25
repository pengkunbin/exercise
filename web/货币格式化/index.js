const numberFormat = function (str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        console.log(prev)
        return ((index % 3) ? next : (next + ',')) + prev;
    })
}

numberFormat('123456789')