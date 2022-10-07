function longestPalindrome(s) {
    if (s === null || s.length < 2)
        return s;
    var resultMap = [];
    var result = [];
    var sArry = s.split("");
    for (var i = 0; i < s.length; i++) {
        resultMap[i] = new Array();
        for (var j = 0; j < s.length; j++) {
            resultMap[i][j] = 0;
        }
    }
    sArry.forEach(function (orderString, orderIndex) {
        sArry.reverse().forEach(function (reverseString, reverseIndex) {
            if (!orderIndex && !reverseIndex) {
                resultMap[orderIndex][reverseIndex] = 0;
                return;
            }
            resultMap[orderIndex][reverseIndex] = getMaxNumber(resultMap, orderIndex, reverseIndex);
            if (orderString === reverseString) {
                resultMap[orderIndex][reverseIndex] =
                    resultMap[orderIndex][reverseIndex] + 1;
                if (resultMap[orderIndex][reverseIndex]) {
                    result.push(orderString);
                }
            }
        });
    });
    console.log("result", result);
    return resultMap[s.length - 1][s.length - 1];
}
function getMaxNumber(array, orderIndex, reverseIndex) {
    if (reverseIndex === 0) {
        return array[orderIndex - 1][reverseIndex];
    }
    if (orderIndex === 0) {
        return array[orderIndex][reverseIndex - 1];
    }
    return Math.max(array[orderIndex - 1][reverseIndex - 1], array[orderIndex][reverseIndex - 1], array[orderIndex - 1][reverseIndex]);
}
var test = "babad";
console.log(longestPalindrome(test));
