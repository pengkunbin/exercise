function isFrequency(words: string[]): boolean {
    const wordsMap: Record<string, number> = {};
    let flag = true;
    words.forEach(word => {
        if (!wordsMap[word]) {
            wordsMap[word] = 0;
        }
        wordsMap[word] = wordsMap[word] + 1;
    })

    let frequency = 0;
    Object.keys(wordsMap).every(word => {
        if (frequency === 0) {
            frequency = wordsMap[word]
        }

        if (frequency !== wordsMap[word]){
            flag = false;
            return false;
        }
        return true;
    })
    return flag;
}

function equalFrequency(word: string): boolean {
    let flag = false;
    for (let i = 0; i < word.length; i++) {
        const wordList = Array.from(word);
        wordList.splice(i, 1)
        flag = isFrequency(wordList)

        if (flag) {
            break;
        }

    }
    return flag;
};


console.log("equalFrequency:", equalFrequency('ddaccb'))
