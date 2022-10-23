function minWindow(s: string, t: string): string {
    let right = 0;
    let left = 0;
    let count = 0;
    let result = '';

    const windowMap: Record<string, number> = {}
    for (let i = 0; i < t.length; i++) {
        const target = t[i];
        windowMap[target] = windowMap[target] ? windowMap[target] = windowMap[target] + 1 : 1;
    }

    // 从左往右扫
    while (right < s.length) {
        // 如果发现窗口中包含目标字符串，开始计数，当这个数值等于目标字符串长度，说明该滑动窗口中已经存在目标字符串
        if (windowMap[s[right]] > 0) {
            count = count + 1;
        }
    
        // 向右扫过程中，窗口中每次进入一个字符串，则需要在map标记减一，防止 count 重复计数
        windowMap[s[right]] = windowMap[s[right]] ?  windowMap[s[right]] - 1 : -1;

        right = right + 1;

        // 缩减窗口的条件：
        // 1. 窗口内已经存在目标字符串, (ans === t.length)
        // 2. 新进入的字符，是否是目标字符串，同时，该逻辑也可以筛选掉滑动窗口内的非目标字符串
        while (count === t.length && windowMap[s[left]] < 0) {
            windowMap[s[left]] = windowMap[s[left]] + 1;
            left = left + 1;
        }

        if (count === t.length && (right - left < result.length || !result)) {
            result = s.substring(left, right)
        }
    }
    return result;
};

console.log("minWindow", minWindow('ab', 'a'))


// "ADOBECODEBANC"
// "ABC"