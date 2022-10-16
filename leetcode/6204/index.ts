function findMaxK(nums: number[]): number {
    let result = -1;

    const sortNumber = nums.sort((a, b) => a - b)

    for (let i = sortNumber.length; i >= 0; i--) {
        if (nums.find(element => element === (-sortNumber[i]))) {
            result = sortNumber[i]
            break;
        }
    }

    return result;
};

findMaxK([-1, 2, -3, 3])