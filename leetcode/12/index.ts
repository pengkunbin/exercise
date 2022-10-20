const RomanSymbols: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

function intToRoman(num: number): string {
    let result = '';

    for (let i in RomanSymbols) {
        // console.log("romanSymbol:", i)
        while (num >= RomanSymbols[i]) {
            num = num - RomanSymbols[i]
            result = result + i
        }
    }

    return result
};

console.log("🚀 ~ file: index.ts ~ line 12 ~ intToRoman ~ intToRoman", intToRoman(9))
