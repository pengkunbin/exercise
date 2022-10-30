/** 模拟题，初始化的时候没做好 */
function mostPopularCreator(creators: string[], ids: string[], views: number[]): string[][] {
    const map: any = {};
    for (let i = 0; i < creators.length; i++) {
        const pre = map[creators[i]];
        const temp = {
            ids: pre?.ids ? [...pre.ids, ids[i]] : [ids[i]],
            sum: pre?.sum ? pre.sum + views[i] : views[i],
            list: pre?.list ? [...pre.list, views[i]] : [views[i]]
        }
        map[creators[i]] = temp;
    }
    const keys = Object.keys(map);
    keys.sort((key1, key2)=> {
        return map[key2].sum - map[key1].sum
    })

    let ans: any[][] = [];
    for(let i = 0;i < keys.length; i++){
        const index = keys[i];
        const lastIndex = keys[i+1];

        const idlist: string[] = [];
        const maxNumber = Math.max(...map[index].list)
        map[index].list?.forEach((element: number, x: number) => {
            if(element === maxNumber){
                idlist.push(map[index].ids[x]);
            }
        });

        ans.push([index, idlist.sort()[0]])
        if(map[index].sum > map[lastIndex]?.sum ){
            break;
        }
    }

    return ans;
};
