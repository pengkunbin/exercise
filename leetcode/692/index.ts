function topKFrequent(words: string[], k: number): string[] {
    const map: any = {}
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = map[words[i]] ? map[words[i]] + 1 : 1;
    }

    const result = Object.keys(map).sort((a, b) => {
        if(map[b] === map[a]){
            return b > a ? -1 : 1;
        }
        return map[b] - map[a]
    })
    return result.slice(0, k);
};
