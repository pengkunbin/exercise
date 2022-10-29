function isSimalier(querie: string, dic: string): boolean {
    let temp = 0;
    for (let i = 0; i < querie.length; i++) {
        if (querie[i] === dic[i]) {
            temp++;
        }

        if (temp === querie.length - 2) {
            return true;
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
                ans.push(queriestring);
                break;
            }
        }
    }
    return ans
};





console.log("twoEditWords", twoEditWords(['word', 'note', 'wood', 'ants'], ['wood', 'wood', 'joke', 'moat']))
