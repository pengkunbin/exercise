function myAtoi(s) {
    var str = s.trim();
    var isNegative = false;
    var sArry = str.split('');
    if (str.charCodeAt(0) === 45) {
        isNegative = true;
    }
    if (str.charCodeAt(0) === 45 || str.charCodeAt(0) === 43) {
        sArry.shift();
    }
    var result = '';
    sArry.some(function (subString) {
        if (subString === ' ' || isNaN(Number(subString))) {
            return true;
        }
        result = "" + result + subString;
        return false;
    });
    var finalresult = Number(result);
    console.log(finalresult);
    if (-finalresult <= -(Math.pow(2, 31)) && isNegative) {
        finalresult = Math.pow(2, 31);
    }
    else if (finalresult >= Math.pow(2, 31) - 1) {
        finalresult = Math.pow(2, 31) - 1;
    }
    if (isNegative) {
        return -finalresult;
    }
    return finalresult;
}
;
console.log(myAtoi('-2147483648'));
