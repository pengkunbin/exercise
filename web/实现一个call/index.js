Function.prototype.myCall = function (context, ...args) {
    if (this === Function.prototype) {
        return undefined
    }
    context = context || window
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}