function tribonacci(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }

    let q = 0;
    let w = 0;
    let e = 1;
    let r = 1;

    for (let i = 3; i <= n; i++) {
        q = w;
        w = e;
        e = r;
        r = w + e + q;
    }

    return r;
};