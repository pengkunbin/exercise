function replaceSpace(s: string): string {
    let ans = '';
    for(let i = 0;i<s.length;i++){
        if(s[i] === ' '){
            ans = ans + '%20';
        }else{
            ans = ans + s[i];
        }
    }
    return ans;
};
