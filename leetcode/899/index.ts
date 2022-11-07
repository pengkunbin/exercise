// https://oi-wiki.org/string/minimal-string/ 最小表示法

const orderlyQueue = function(s, k) {
    if (k === 1) {
        let ans = s;
        for (let i = 0; i < s.length - 1; ++i) {
            const n = s.length;
            s = s.substring(1, n) + s[0];
            ans = ans < s ? ans : s;
        }
        return ans;
    }
    return [...s].sort().join('');
};
