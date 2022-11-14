function removeStones(stones: number[][]): number {
    const edges: Record<number, number[]> = {}
    for (let [i, [x1, y1]] of stones.entries()) {
        for (let [j, [x2, y2]] of stones.entries()) {
            if ((x1 === x2 || y1 === y2) && i !== j) {
                edges[i] ? edges[i].push(j) : edges[i] = [j]
            }
        }
    }

    const set = new Set<number>();
    let totalGraphs = 0;
    for (let i = 0; i < stones.length; i++) {
        if (!set.has(i)) {
            totalGraphs = totalGraphs + 1;
            dfs(i, set, edges)
        }
    }

    return stones.length - totalGraphs;
};

function dfs(i: number, set: Set<number>, edges: Record<number, number[]>) {
    set.add(i)
    for (let j = 0; j < edges[i]?.length; j++) {
        if (!set.has(edges[i][j])) {
            dfs(edges[i][j], set, edges)
        }
    }
}

removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]])