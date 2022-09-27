/** 说明：该题用并查集解，下面代码错误 */

function equationsPossible(equations: string[]): boolean {
    const value = 1;
    const maxValue = 300;
    const map: any = {};
    let flag = false;

    map[equations[0][0]] = value;

    equations.every(equation => {
        console.log("🚀 ~ file: index.ts ~ line 46 ~ equationsPossible ~ map", map, equation)

        if (!map[equation[0]] && !map[equation[3]]) {
            if (equation[1] === '=') {
                if(equation[0] === equation[3]){
                    flag = true;
                    return flag;
                }
                map[equation[0]] = value + maxValue;
                map[equation[3]] = value + maxValue;
            }else{
                if(equation[0] === equation[3]){
                    flag = false;
                    return flag;
                }
                map[equation[0]] = value + maxValue;
                map[equation[3]] = value + maxValue + 1;
            }
            return true;            
        }

        if (equation[1] === '=') {
            if(!map[equation[0]] || map[equation[0]] > maxValue){
                map[equation[0]] = map[equation[3]]
                return true;
            }
            if(!map[equation[3]] || map[equation[3]] > maxValue){
                map[equation[3]] = map[equation[0]]
                return true;
            }

            return flag = map[equation[0]] === map[equation[3]];
        }

        if (equation[1] === '!') {
            if(!map[equation[0]]){
                map[equation[0]] = map[equation[3]] + 1
                return true;
            }
            if(!map[equation[3]]){
                map[equation[3]] = map[equation[0]] + 1
                return true;
            }

            flag = map[equation[0]] !== map[equation[3]];
            return !flag;
        }


    })

    return flag;
};

console.log("🚀 ~ file", equationsPossible(["a==b","e==c","b==c","a!=e"]))
