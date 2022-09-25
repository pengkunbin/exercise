const RomaMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const result = s.split('').reduce((finalValue: number, romaString: string, currentIndex: number, sArry: string[])=>{
      if(RomaMap[romaString] < RomaMap[sArry[currentIndex + 1]]){
        return finalValue - RomaMap[romaString]
      }
      return finalValue + RomaMap[romaString]
  }, 0)
  return result;
}
