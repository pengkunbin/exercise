function numDecodings(s: string): number {
    // s='112'
    const slength = s.length;
    // 初始化一个动态规划数组，最小值是0
    const dp = new Array(slength + 1).fill(0);
    // 第1个数默认是有结果的，最少为1种结果
    dp[0] = 1;
    // 从第1个数开始
    for (let i = 1; i <= slength; i++) {
        // 一个字母对应一个数字的情况
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        // 两个字母的情况，要排除题干中提到的，前一个数字不能为0，并且这两个数字加起来属于字母的范围
        if (i > 1 && s[i - 2] != '0' && Number(Number(s[i - 2]) * 10 + Number(s[i - 1])) <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    // 输出dp里最终的结果
    return dp[slength];
}