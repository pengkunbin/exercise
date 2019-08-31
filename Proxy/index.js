const target = {
    name: 'cxk',
    age: 20
}
//我们每访问一次就要增加一岁

const handler = {
    get: function (target, key, receiver) {
        console.log(`getting ${key}`)
        //如果访问的key值为age,则返回age+1,同时改变age值
        if (key === 'age') {
            const age = Reflect.get(target, key, receiver)
            Reflect.set(target, key, age + 1, receiver)
            return age + 1
        }
        //如果访问的key值不为age,则返回当前key的value
        return Reflect.get(target, key, receiver)
    }
}

const a = new Proxy(target, handler)

console.log(a.name, a.age)