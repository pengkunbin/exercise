function minWindowbaby(s: string, t: string): string {
    let right = 0;
    let left = 0;
    let ans = ''

    const patternMap: Record<string, number> = {}
    let cnt = 0;

    // 处理target串
    // target串为n，意味着source串欠了n个当前字符
    for (let i = 0; i < t.length; i++) {
        const pattern = t[i];
        patternMap[pattern] = patternMap[pattern] ? patternMap[pattern] = patternMap[pattern] + 1 : 1;
    }

    while (right < s.length) {

        // 扩展right，从左扫到右
        const target = s[right];
        
        // 只有在target欠数的时候，计数才有意义
        if (patternMap[target] > 0) {
            cnt++;
        }
        
        // 每次滑动数组中进来一个，就补了一个
        // 为 -1 意味着盈余了 1个
        patternMap[target] = patternMap[target] ? patternMap[target] = patternMap[target] - 1 : -1;
        right = right + 1;

        // 只有盈余的时候可以缩紧left边界，以保证cnt一直符合条件
        console.log("patternMap", left, patternMap[s[left]], s[left], patternMap)

        while (cnt === t.length && patternMap[s[left]] < 0) {
            const target0 = s[left];
            patternMap[target0] = patternMap[target0] + 1;
            left = left + 1;
        }

        console.log(s.substring(left, right), cnt, left, right, patternMap, "\n");
        // 只要cnt符合条件，就判断一下长度需不需要更新
        if(cnt === t.length && (!ans || ans.length > right - left))
            ans = s.substring(left, right);
    }
    return ans;
};



console.log("minWindow", minWindowbaby("ab", "a"))
