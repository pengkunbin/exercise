/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
 var mostPopularCreator = function(creators, ids, views) {
    // map记录数据格式为 [creator: 视频作者, {total: 总播放量, most: 单个视频最多播放, mostId: 单个视频最多播放最小Id}]
    const map = new Map();
    const n = creators.length;
    for (let i = 0; i < n; i++) {
        if (map.get(creators[i])) {
            let {most, mostId, total} = map.get(creators[i]);
            if ((views[i] === most && ids[i] < mostId) || views[i] > most) {
                mostId = ids[i];
                most = views[i];
            }
            total += views[i];
            map.set(creators[i], {total, most, mostId});
        } else {
            map.set(creators[i], {total: views[i], mostId: ids[i], most: views[i]});
        }
    }

    // 根据total递减排序
    const arr = Array.from(map.entries()).sort((a, b) => b[1].total - a[1].total);
    // 最大total，即最高流行度
    const total = arr[0][1].total;
    // 寻找最高流行度相同的项
    return arr.filter(item => item[1].total === total).map(item => ([item[0], item[1].mostId]));
};


// mostPopularCreator(["alice","bob","alice","chris"], ["one","two","three","four"], [5,10,5,4])
console.log("🚀 ~ file: index.js", mostPopularCreator(["alice","bob","alice","chris"], ["three","two","one","four"], [5,10,5,4]))
