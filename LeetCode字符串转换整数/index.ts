function myAtoi(s: string): number {
    const str = s.trim();
    let isNegative = false;
    const sArry = str.split('');
    if(str.charCodeAt(0) === 45){
        isNegative = true;
    }

    if(str.charCodeAt(0) === 45 || str.charCodeAt(0) === 43){
        sArry.shift();
    }
    let result = '';

    sArry.some((subString) => {
        if(subString === ' ' || isNaN(Number(subString))){
            return true;
        }
        result = `${result}${subString}`
        return false;
    })

    let finalresult = Number(result);

    console.log(finalresult);

    if(-finalresult <= -(2 ** 31) && isNegative){
        finalresult = 2 ** 31;
    } else if (finalresult >= 2 ** 31 - 1) {
        finalresult = 2 ** 31 - 1;
    }

    if(isNegative){
        return -finalresult
    }

    return finalresult
};

console.log(myAtoi('-2147483648'))