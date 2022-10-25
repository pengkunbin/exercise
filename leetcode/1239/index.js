var maxLength = function(arr) {
    const length = arr.length;
    if(length === 1) {
        return arr[0].length;
    }
    let maxWordLength = 0;

    const dfs = function(path, index) {
        maxWordLength = Math.max(maxWordLength, path.join('').length);

        for(let i = index; i < length; i++) {
            const currentStr = path.join('');
            if(isContain(currentStr, arr[i])) {
                continue;
            }
            path.push(arr[i]);
            dfs(path, i + 1);
            path.pop();
        }
    }

    const isContain = function(str1, str2) {
        const set = new Set(str1.split(''));
        const set2 = new Set(str2.split(''));
        if(set2.size < str2.length) {
            return true;
        }
        for(let i = 0; i < str2.length; i++) {
            if(set.has(str2[i])) {
                return true;
            }
        }

        return false;
    }

    dfs([], 0)

    return maxWordLength;
};

console.log("maxLength:", maxLength(["cha","r","act","ers"]))
