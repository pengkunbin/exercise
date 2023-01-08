function initFunction(point1: number[], point2: number[]) {
    const k = (point1[1] - point2[1]) / (point1[0] - point2[0])
    const b = point1[1] - (k * point1[0]);
    return { k, b }
}

function maxPoints(points: number[][]): number {
    let max = 1;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            if(i === j) continue;
            const { k, b } = initFunction(points[i], points[j]);
            const key = `${k}-${b}`;
            const value = map.get(`${k}-${b}`) ?? 0;
            map.set(key, value + 1);
        }
        max = max < [...map.values()].sort((a, b) => b-a)[0] + 1 ? [...map.values()].sort((a, b) => b-a)[0] + 1 : max;
    }

    return max;
};

maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]);