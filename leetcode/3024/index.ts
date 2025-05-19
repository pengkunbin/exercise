enum TriangleType {
    Equilateral = 'equilateral',
    Isosceles = 'isosceles',
    Scalene = 'scalene',
    None = 'none'
}

function triangleType(nums: number[]): string {
    nums.sort((a, b) => a - b)

    if(nums.length !== 3){
        return TriangleType.None;
    }

    const [a, b, c] = nums;

    if(a + b <= c){
        return TriangleType.None;
    }

    if (a === c) {
        return TriangleType.Equilateral;
    }

    if (a === b || b === c) {
        return TriangleType.Isosceles;
    }

    return TriangleType.Scalene;
};