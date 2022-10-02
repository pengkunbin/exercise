function getMaxFactors(a: number, b: number): number {
    for (let i = a; i >= 1; i--) {
        if (a % i == 0) {
            if (b % i == 0) {
                return i
            }
        }
    }
    return a;
}

function commonFactors(a: number, b: number): number {
    let maxFactors = getMaxFactors(a, b)
    if (maxFactors === 0) {
        return 1;
    }
    if (maxFactors === 1) {
        return 1;
    }

    const list: number[] = [];
    for (let i = 1; i <= maxFactors; i++) {
        if (maxFactors % i === 0) {
            list.push(i);
        }
    }

    return list.length;
};

console.log("commonFactors:", commonFactors(12, 6))
