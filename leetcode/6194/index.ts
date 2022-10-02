const integerGEQZero = (number: number) => {
    let result = '';
    while (number >= 1) {
        result = number % 2 + result;
        number = Math.floor(number / 2);
    }
    return result;
};

const hammingWeight = (binaryNumber: string) => {
    const bs = String(binaryNumber)
    let count = 0;
    for (let i = 0; i < bs.length; i++) {
        if (bs[i] === '1') {
            count++;
        }
    }
    return count;
}

function minimizeXor(num1: number, num2: number): number {
    const binaryString2 = integerGEQZero(num2);
    let oneCount = hammingWeight(binaryString2);

    const binaryString1 = integerGEQZero(num1);
    const result: string[] = []

    for (let i = 0; i < binaryString1.length; i++) {
        if (binaryString1[i] === '1' && oneCount > 0) {
            result[i] = '1';
            oneCount--
            continue;
        }
        result[i] = '0';
    }

    if (oneCount > 0) {
        let str = ''
        for (let i = 0; i < oneCount; i++) {
            str = str + '1'
        }

        if (result.length < binaryString2.length) {
            return parseInt(`${str}${result.join('')}`, 2)
        }

        if (result.length === binaryString2.length) {
            for (let i = result.length - 1; i >= 0; i--) {
                if(result[i] === '0' && oneCount > 0){
                    result[i] = '1'
                    oneCount --;
                }
            }
            return parseInt(result.join(''), 2)
        }
    }

    return parseInt(result.join(''), 2);
};

console.log("minimizeXor", minimizeXor(25, 72))
// minimizeXor(1, 12)