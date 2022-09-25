const str = "0P"

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
isPalindrome(str)