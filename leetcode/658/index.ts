function findClosestElements(arr: number[], k: number, x: number): number[] {
    let xIndex = arr.findIndex(element => element > x);
    if (xIndex === -1) {
        xIndex = arr.length - 1;
    }

    let preIndex = Math.max(xIndex - 1, 0);
    let nextIndex = xIndex === 0 ? 1 : xIndex;
    let count = k;

    const smallresult: number[] = [];
    const biggerresult: number[] = [];

    while (count > 0) {

        count--;

        if(preIndex < 0){
            biggerresult.push(arr[nextIndex])
            nextIndex++;
            continue;
        }
        if(nextIndex > arr.length - 1) {
            smallresult.unshift(arr[preIndex]);
            preIndex--;
            continue;
        }


        if ((Math.abs(arr[preIndex] - x) <= Math.abs(arr[nextIndex] - x))) {
            smallresult.unshift(arr[preIndex]);
            preIndex--;
        } else {
            biggerresult.push(arr[nextIndex])
            nextIndex++;
        }

    }

    return smallresult.concat(biggerresult);
};
