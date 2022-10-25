function maxLengthts(arr: string[]): number {
    let ans = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const temp = arr[i].concat(arr[j])
            if (ans) {
                ans = ans.length < temp.length ? temp : ans;
            }else{
                ans = temp;
            }
        }
    }
    return ans.length;
};

