function findWords(board: string[][], words: string[]): string[] {
    const ans: string[] = [];
    const tWords: string[] = [];
    const t: number[][] = [];

    // 先定位起点
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < board.length; j++) {
            for (let k = 0; k < board[0].length; k++) {
                if (words[i][0] === board[j][k]) {
                    tWords.push(words[i])
                    t.push([j, k])
                }
            }
        }
    }

    // console.log("tWords", tWords)

    for (let i = 0; i < tWords.length; i++) {
        const visited: number[][] = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));
        let flag = false;
        function dfs(x: number, y: number, step: number, s: string) {
            if (step === s.length) {
                flag = true;
                return;
            }

            // console.log("step:", step, "coord:", x, y, board?.[x]?.[y], s[step], s.length, s)
            // console.log(board?.[x]?.[y] !== s[step], visited[x]?.[y] === 1)
            // console.log(step)
            // console.log( '\n', visited[0], '\n', visited[1], '\n', visited[2])


            if (x === -1 || y === -1 || x > board.length || y > board[0].length || board?.[x]?.[y] !== s[step] || visited[x][y] === 1) {
                return;
            }

            visited[x][y] = 1;

            dfs(x - 1, y, step + 1, s)
            dfs(x + 1, y, step + 1, s)
            dfs(x, y + 1, step + 1, s)
            dfs(x, y - 1, step + 1, s)

            visited[x][y] = 0;
        }

        dfs(t[i][0], t[i][1], 0, tWords[i])

        if (flag && !ans.find(a => a === tWords[i])) {
            // console.log("tWords[i]", tWords[i])
            ans.push(tWords[i])
        }
    }
    // console.log("ans", ans)
    return ans;
};




// function DFS(a, b, map: string[][], step: string[][], word: string){
//     if(word === ""){
//         console.log("keyi");
//         return;
//     }
//     for(let i = 0; i < 4; i++){
//         if(map[a + step[i][0]][b + step[i][1]] === word[0]){
//             DFS(a + step[i][0],b + step[i][1],map, step, word[]);
//         }
//     }

// }

findWords([["a", "b", "c"], ["a", "e", "d"], ["a", "f", "g"]], ["eaafgdcba", "eaabcdgfa"])