
function oddString(words: string[]): string {
    const difference: number[][] = [];

    for (let i = 0; i < words.length; i++) {
        const templist: number[] = [];
        for(let j = 0; j< words[i].length - 1; j++){
            templist.push(words[i][j+1].charCodeAt(0) - words[i][j].charCodeAt(0))
        }
        difference.push(templist)
    }

    let temp: number[] = difference[0];
    // console.log(" difference", difference)
    for(let i = 1; i< difference.length - 1; i++){
        // console.log("temp", temp, difference[i], difference[i + 1])

        if(JSON.stringify(temp) !== JSON.stringify(difference[i]) && JSON.stringify(temp) === JSON.stringify(difference[i + 1])){
            return words[i]
        }

        if(JSON.stringify(temp) === JSON.stringify(difference[i]) && JSON.stringify(temp) !== JSON.stringify(difference[i + 1])){
            return words[i + 1]
        }
    }
    // console.log("🚀 ~ file: index.ts ~ line 5 ~ oddString ~ difference", difference)

    return words[0];
};


console.log("oddString", oddString(["ddd","poo","baa","onn"])
)
