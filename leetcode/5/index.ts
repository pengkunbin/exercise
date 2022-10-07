function longestPalindrome(s: string): string {
  if (s === null || s.length < 2) return s;

  const resultMap = [];
  const sArry = s.split("");

  for (let i = 0; i < s.length; i++) {
    resultMap[i] = new Array();
    for (let j = 0; j < s.length; j++) {
      resultMap[i][j] = 0;
    }
  }

  sArry.forEach((orderString, orderIndex) => {
    sArry.reverse().forEach((reverseString, reverseIndex) => {
      if (!orderIndex && !reverseIndex) {
        resultMap[orderIndex][reverseIndex] = 0;
        return;
      }

      resultMap[orderIndex][reverseIndex] = getMaxNumber(
        resultMap,
        orderIndex,
        reverseIndex
      );

      if (orderString === reverseString) {
        resultMap[orderIndex][reverseIndex] =
          resultMap[orderIndex][reverseIndex] + 1;
      }
    });
  });
  return resultMap[s.length - 1][s.length - 1];
}

function getMaxNumber(array, orderIndex, reverseIndex): number {
  if (reverseIndex === 0) {
    return array[orderIndex - 1][reverseIndex];
  }

  if (orderIndex === 0) {
    return array[orderIndex][reverseIndex - 1];
  }

  return Math.max(
    array[orderIndex - 1][reverseIndex - 1],
    array[orderIndex][reverseIndex - 1],
    array[orderIndex - 1][reverseIndex]
  );
}

const test = "babad";

console.log(longestPalindrome(test));
