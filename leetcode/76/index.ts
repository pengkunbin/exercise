// 暴力求解
function isSimailer(targets: string, patterns: string): boolean {
    const patternMap: Record<string, number> = {}
    let ans = 0;

    // ABC
    for (let i = 0; i < patterns.length; i++) {
        const pattern = patterns[i];
        patternMap[pattern] = patternMap[pattern] ? patternMap[pattern] = patternMap[pattern] + 1 : 1;
    }

    // BANC
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        if (patternMap[target] > 0) {
            patternMap[target] = patternMap[target] - 1;
            ans++
        }
    }

    return ans === patterns.length;
}

function minWindowx(s: string, t: string): string {
    let count = t.length;
    while (count <= s.length) {
        for (let i = 0; i <= s.length - count; i++) {
            const substring = s.substring(i, i + count);
            // console.log("substring", substring , i , i + count)
            if (isSimailer(substring, t)) {
                return substring;
            }
        }
        count++;
    }
    return '';
};

console.log("minWindow", minWindow("ABCDE", "AB"))

