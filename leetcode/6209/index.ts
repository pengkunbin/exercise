function getNlist(n: number) {
    let i = n % 2 === 0 ? 2 : 1;
    let nlist: number[] = [];
    while (i <= n) {
        nlist.push(i)
        i = i * 2
    }

    let xlist: number[] = [];
    let x = n;
    for (let i = nlist.length; i >= 0; i--) {
        if (x - nlist[i] >= 0) {
            x = x - nlist[i];
            xlist.unshift(nlist[i])
        }
    }
    return xlist;
}

function productQueries(n: number, queries: number[][]): number[] {
    const nlist = getNlist(n)
    // console.log("nlist:", nlist)

    const result: number[] = []
    for (let i = 0; i < queries.length; i++) {
        let ans = 1;
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            ans = nlist[j] * ans % 1000000007;
        }
        // console.log("ans: ", ans)

        result.push(ans)
    }

    return result
};

console.log("productQueries", productQueries(58, [[1,3], [1, 1]]))
