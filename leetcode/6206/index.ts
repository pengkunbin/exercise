function reverseNumber(num: number): number {
    const mid: string[] = []
    for (let i = 0, j = String(num).length - 1; i <= j; i++, j--) {
        mid[i] = String(num)[j];
        mid[j] = String(num)[i];
    }
    return Number(mid.join(''))
}

function sumOfNumberAndReverse(num: number): boolean {
    for (let i = 0; i <= num; i++) {
        if (i + reverseNumber(i) === num) {
            return true;
        }
    }
    return false;
};

console.log("sumOfNumberAndReverse()", sumOfNumberAndReverse(0), reverseNumber(0))
// sumOfNumberAndReverse(443)