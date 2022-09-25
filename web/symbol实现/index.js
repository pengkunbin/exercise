//实现一个symbol
const Person = (function () {
    const name = '00' + Math.random()
    function Person(name) {
        console.log(this)
        this[_name] = name
    }
    Object.defineProperty(Person.prototype, 'name', {
        get: function () {
            return this[_name]
        }
    })
    return Person
})()