function isNeighbour(start: string, end: string) {
    let result = 0;
    for (let i = 0; i < start.length; i++) {
        if (start[i] !== end[i]) {
            result++;
        }
    }
    // console.log("start[i]", result)

    return result === 1;
}

function initAdj(list: string[]) {
    const adj: number[][] = new Array(list.length).fill(0).map(() => new Array());
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (isNeighbour(list[i], list[j])) {
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    return adj;
}

function minMutation(start: string, end: string, bank: string[]): number {
    const targetIndex = bank.findIndex(b => b === end) + 1;
    console.log("targetIndex", targetIndex)
    if (targetIndex === 0) {
        return -1;
    }

    const adj = initAdj([start, ...bank])
    console.log("adj", adj)

    const queue: number[] = [0];
    const visited = new Array(bank.length + 1).fill(0);
    visited[0] = true;
    let step = 0;
        
    while (queue.length) {
        console.log("queue", queue)
        const sz = queue.length;
        for (let i = 0; i < sz; i++) {
            const curr = queue.shift() as number;
            if (curr === targetIndex) {
                return step;
            }
            for (const next of adj[curr]) {
                if (visited[next]) {
                    continue;
                }
                visited[next] = true;
                queue.push(next);
            }
        }
        step++;
    }

    return -1;
};

// "AACCTTGG"
// "AATTCCGG"
// ["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"]
console.log("minMutation", minMutation("AACCTTGG", "AATTCCGG", ["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"]))
