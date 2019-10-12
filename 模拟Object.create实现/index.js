const newObj = function (proto) {
    function F() {}
    F.prototype = proto
    return new F()
}

const obj = newObj(Object.prototype)