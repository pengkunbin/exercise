function reverseLeftWords(s: string, n: number): string {
    if (n >= s.length) {
        return s;
    }
    let ans = s.substring(n, s.length);
    ans = ans + s.substring(0, n);
    return ans;
};