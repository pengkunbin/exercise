function check(s: string, t: string): boolean {
    let lenx = s.length / t.length;

    let ans = "";
    for (let i = 1; i <= lenx; i++) {
        ans = ans + t;
    }
    return ans === s;
}

function gcdOfStrings(str1: string, str2: string): string {
    const s1length = str1.length;
    const s2length = str2.length;

    let ans = "";

    for (let i = Math.min(s1length, s2length); i >= 1; i--) {
        if (s1length % i === 0 && s2length % i === 0) {
            const t = str1.substring(0, i)
            if (check(str1, t) && check(str2, t)) {
                ans = t;
                break;
            }
        }
    }

    return ans;
};