//数组去重

//Set
let arry = ['a', 'b', 'c', 'd']
const handle = arr => [...new Set(array)]

//reduce
const handle = array => array.reduce((accumulator, currentValue) => {
    !accumulator.includes(currentValue) && accumulator.push(currentValue)
    return accumulator
}, [])

//filter
const handle = array => {
    let map = new Map()
    return array.filter(item => map.has(item) ? false : map.set(item))
}