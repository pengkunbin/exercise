// 错误解法
// function compress(chars: string[]): number {
//     let resultString = '';
//     let number = 0
//     chars.forEach((char, index)=>{
//         number = number + 1
//         if(char !== chars[index + 1]){
//             resultString = resultString + char + number
//             number = 0
//         }
//     })
//     console.log(resultString)
//     return resultString.length
// };

function compress(chars) {
    const n = chars.length;
    let write = 0, left = 0;
    for (let read = 0; read < n; read++) {
        if (read === n - 1 || chars[read] !== chars[read + 1]) {
            chars[write++] = chars[read];
            let num = read - left + 1;
            if (num > 1) {
                const anchor = write;
                while (num > 0) {
                    chars[write++] = '' + num % 10;
                    num = Math.floor(num / 10);
                }
                reverse(chars, anchor, write - 1);
            }
            left = read + 1;
        }
    }
    return write;
};

const reverse = (chars, left, right) => {
    while (left < right) {
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
}

console.log(compress(["a","a","b","b","c","c","c"]))