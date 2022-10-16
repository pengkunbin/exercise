function isMatch(time: string, times: string) {
    for (let i = 0; i < time.length; i++) {
        if (time[i] === '?') {
            continue;
        }
        if (time[i] !== times[i]) {
            return false
        }
    }
    return true
}

function countTime(time: string): number {
    let result = 0;
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            const times = `${i < 10 ? '0' : ''}${i}:${j < 10 ? '0' : ''}${j}`;
            if (isMatch(time, times)) {
                result++
            }
        }
    }
    return result
};