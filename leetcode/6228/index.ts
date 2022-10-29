function isSimalier(querie: string, dic: string): boolean {
    let temp = 0;
    for (let i = 0; i < querie.length; i++) {
        if (temp === querie.length - 2) {
            return true;
        }

        if (querie[i] === dic[i]) {
            temp++;
        }
    }
    return false;
}

function twoEditWords(queries: string[], dictionary: string[]): string[] {
    const ans: string[] = [];

    if (queries[0].length === 1 || queries[0].length === 2) {
        return queries;
    }

    for (let i = 0; i < queries.length; i++) {
        const queriestring = queries[i];

        for (let j = 0; j < dictionary.length; j++) {
            const dictionarystring = dictionary[j]
            if (isSimalier(queriestring, dictionarystring)) {
                if (ans.findIndex(ele => ele === queriestring) !== -1) {
                    ans.push(queriestring)
                }
            }
        }
    }
    return ans
};





