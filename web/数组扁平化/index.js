//展开数组

//ES10 flat 如果数组有空值，他们就会被丢弃
const arry = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]
const spreadArry = arry.flat()
console.log(spreadArry)

//apply
const arr = ['a', 'b', ['c', 'd']]
const spreadArry = [].concat.apply([], arr)

//...
const arr = ['a', 'b', ['c', 'd']]
const spreadArry = [].concat(...arr)


//reduce
const arr = ['a', 'b', ['c', 'd']]
const handle = array => 
    array.reduce((accumulator, currentValue) =>
         accumulator.concat(Array.isArray(currentValue) ? handle(currentValue): currentValue), [])
