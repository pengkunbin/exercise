function removeDuplicates(s: string): string {
    const ans: string[] = [];
    ans.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (ans[ans.length - 1] !== s[i]) {
            ans.push(s[i])
        } else {
            ans.pop()
        }
    }
    return ans.join('')
};


console.log("removeDuplicates", removeDuplicates('abbaca'))
