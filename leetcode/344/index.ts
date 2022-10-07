function reverseStr(s: string, k: number): string {
  let result = "";
  for (let i = 0; i < s.length; i += k * 2) {
    if (i + k * 2 > s.length) {
      const istr = s.substring(i, s.length);
      if (istr.length < k) {
        result = result + strReverse(istr);
      } else {
        result =
          result + strReverse(istr, 0, k) + istr.substring(k, istr.length);
      }
      break;
    }

    const istr = s.substring(i, i + k * 2);
    result = result + strReverse(istr, 0, k) + istr.substring(k, istr.length);
  }
  return result;
}

function strReverse(str: string, start = 0, end?: number): string {
  if (!end) {
    return Array.from(str).reverse().join("");
  }

  return Array.from(str.substring(start, end)).reverse().join("");
}

console.log(reverseStr("abcdefg", 1));
