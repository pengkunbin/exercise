// 算花费的时间
function getTimes(neededTime: number[], timestart: number, count: number): number {
    const filterTime = neededTime.slice(timestart, timestart + count)
    // console.log("🚀 ~ file: index.ts ~ line 4 ~ getTimes ~ filterTime", filterTime)
    const maxTime = Math.max(...filterTime);
    let times = 0;
    let flag = false;
    filterTime.forEach(time => {
        if (time !== maxTime || flag) {
            times = times + time;
        } else {
            flag = true
        }
    })
    return times;
}

function minCost(colors: string, neededTime: number[]): number {
    let timestart = 0;
    let count = 1;
    let times = 0;

    for (let i = 1; i < colors.length; i++) {

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

        // 如果已经有连续的叠加数，说明前方有连续字母
        if (count > 1) {
            times = getTimes(neededTime, timestart, count) + times;
        }
    }
    console.log("times", times)

    return times;
};

minCost('bbbaaa', [4, 9, 3, 8, 8, 9])