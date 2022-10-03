function sum(arr: number[]) {
    return arr.reduce(function (prev: number, curr: number) {
        return prev + curr;
    }, 0);
}

// 算花费的时间
function getTimes(neededTime: number[], timestart: number, count: number): number {
    const filterTime = neededTime.slice(timestart, timestart + count)
    // console.log("filterTime", filterTime, count)
    const maxTime = Math.max(...filterTime);
    const sumTime = sum(filterTime);
    return sumTime - maxTime;
}

function minCost(colors: string, neededTime: number[]): number {
    let timestart = 0;
    let count = 1;
    let times = 0;

    for (let i = 1; i < colors.length; i++) {
        // console.log("count", count, colors[i - 1], colors[i], timestart, i)

        // 如果已经有连续的叠加数，说明前方有连续字母
        if ((count > 1 && colors[i - 1] !== colors[i]) || i === colors.length - 1) {
            if (colors[i - 1] !== colors[i]) {
                times = getTimes(neededTime, timestart, count) + times;
            } else {
                times = getTimes(neededTime, timestart, count + 1) + times;
            }
        }

        // 如果后一个数不等于前一个数
        if (colors[i - 1] !== colors[i]) {
            // 记录当前不重复的元素的下标
            timestart = i;
            // 初始化叠加数量
            count = 1;
        } else {
            count = count + 1;
        }


        // console.log("count", count, i, colors[i - 1], colors[i])
    }
    // console.log("times", times)

    return times;
};

minCost('abaac', [1, 2, 3, 4, 5])