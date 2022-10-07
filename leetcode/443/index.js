function compress(chars) {
    let resultString = '';
    let number = 0;
    chars.forEach((char, index) => {
        number = number + 1;
        if (char !== chars[index + 1]) {
            resultString = resultString + char + number;
            number = 0;
        }
    });
    console.log(resultString);
    return resultString.length;
}
;
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
