function pushDominoes(dominoes: string): string {
    // 初始化一个 dominoes 字符串长度的数组
    const forces: number[] = Array(dominoes.length).fill(0)
    // 初始化一个 dominoes 字符串长度的数组
    const revserForces: number[] = Array(dominoes.length).fill(0)

    // 存储最终的结果
    const result = Array.from(dominoes);

    // 正向的力
    let force = 0;
    // 逆向的力
    let revserForce = 0;

    // 向右遍历
    for (let i = 0; i < dominoes.length; i++) {
        // 因为向左，所以跟向右冲突，根据题目题意，遇到冲突的力，变为 0
        if (dominoes[i] === "L") {
            force = 0;
            // 向右，初始化为最大的数组长度，便于解决开头或者结尾字符串为 "." 的情况
        } else if (dominoes[i] === "R") {
            force = dominoes.length;
            // 遇到 "." 则递减
        } else {
            force = Math.max(force - 1, 0)
        }
        forces[i] = force
    }

    // 向左遍历 - 同理
    for (let i = dominoes.length - 1; i >= 0; i--) {
        if (dominoes[i] === "R") {
            revserForce = 0;
        } else if (dominoes[i] === "L") {
            revserForce = dominoes.length;
        } else {
            revserForce = Math.max(revserForce - 1, 0)
        }
        revserForces[i] = revserForce
    }

    for (let i = 0; i < forces.length; i++) {
        forces[i] = forces[i] - revserForces[i]
        if (forces[i] > 0) {
            result[i] = 'R'
        } else if (forces[i] < 0) {
            result[i] = 'L'
        } else {
            result[i] = '.'
        }
    }

    return result.join('');
};
