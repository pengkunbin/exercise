const inherit = function (Child, Father) {
    Child.prototype = Object.create(Father.prototype, {
        constructor: {
            enumerable: false,
            configurable: true,
            writable: true,
            value: Father
        }
    })
    Object.setPrototypeOf(Child,Father)
}