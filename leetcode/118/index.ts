function generate(n: number): number[][] {
    const result: number[][] = [];

    for(let i = 0; i < n; i++) {
        result[i] = new Array(i + 1).fill(1);
        
        for(let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }

    return result;
}