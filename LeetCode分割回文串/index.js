const str = 'aabbaae'
const isPalindrome = function (str) {
    let s = str.replace(/[^a-z0-9]+/ig, '').toLocaleLowerCase()
    const length = s.length / 2
    for (let i = 0, j = s.length - 1; i < length; i++ , j--) {
        if(s[i] !== s[j]){
            return false
        }
    }
    return true
}
const partition = function (str) {
    let arry = []
    let result = []
    for (let i = 0; i < str.length; i++) {
        arry.push(str.slice(0,i+1))
        arry.push(str.slice(i+1,str.length))
        for(let j in arry){
            if(isPalindrome(arry[j])&&arry[j]){
                console.log(arry[j])
                result.push()
            }
        }
        arry = []
    }
}