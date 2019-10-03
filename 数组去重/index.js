//数组去重

//Set
const arry = ['a', 'b', 'c', 'd', 'e', 'a']
const handle = arr => [...new Set(arry)]

//reduce
const handle = array => array.reduce((accumulator, currentValue) => {
    !accumulator.includes(currentValue) && accumulator.push(currentValue)
    return accumulator
}, [])

//filter
const handle = array => {
    let map = new Map()
    return arry.filter(item => map.has(item) ? false : map.set(item))
}