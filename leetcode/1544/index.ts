function isUpperCase(s: string): boolean {
    return 'A'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= 'Z'.charCodeAt(0)
}

function isLowerCase(s: string): boolean {
    return 'a'.charCodeAt(0) <= s.charCodeAt(0) && s.charCodeAt(0) <= 'z'.charCodeAt(0)
}

function makeGood(s: string): string {
    const len = s.length;
    const ret: string[] = [];
    let i = 0;
    while (i < len) {
        if (ret.length > 0
            && ret[ret.length - 1].toLowerCase() === s.charAt(i).toLowerCase()
            && ret[ret.length - 1] !== s.charAt(i)
        ) {
            ret.pop();
        } else {
            ret.push(s.charAt(i));
        }
        i += 1;
    }
    return ret.join('');
};