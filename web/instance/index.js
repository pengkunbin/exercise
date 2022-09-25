const instanceOf = function (target, origin) {
    const proto = target.__proto__
    if (proto) {
        if (proto === origin.prototype) {
            return true
        }else{
            return instanceOf(proto,origin)
        }
    }else{
        return false
    }
}