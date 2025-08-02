/**
 * LeetCode 49 - Group Anagrams
 * 使用ASCII码实现的解决方案
 * @param strs 字符串数组
 * @returns 分组后的字谜数组
 */
function groupAnagrams(strs: string[]): string[][] {
    // 使用Map存储结果，键为ASCII特征，值为字谜组
    const map = new Map<string, string[]>();
    
    for (const str of strs) {
        // 创建一个长度为26的数组，对应26个小写字母
        // 初始值都为0
        const count = new Array(26).fill(0);
        
        // 遍历字符串中的每个字符
        for (let i = 0; i < str.length; i++) {
            // 计算字符相对于'a'的偏移量，作为数组索引
            // 例如：'a' - 'a' = 0, 'b' - 'a' = 1, ...
            const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
            // 对应位置计数加1
            count[index]++;
        }
        
        // 将count数组转换为特征字符串
        // 使用'#'分隔每个计数，避免歧义
        // 例如：[1,0,1]和[10,1]如果直接拼接会都变成"101"
        const key = count.join('#');
        
        // 如果Map中已存在这个特征，则将当前字符串加入对应数组
        // 否则，创建一个新数组
        if (map.has(key)) {
            map.get(key)!.push(str);
        } else {
            map.set(key, [str]);
        }
    }
    
    // 返回Map中所有的值（字谜组）
    return Array.from(map.values());
}

export default groupAnagrams;