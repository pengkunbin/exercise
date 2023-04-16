const math = require('mathjs');

// 定义符号
const FN = math.parse('FN');
const ZXB = 1.0; // 替换为实际的值
const AR = 1.0; // 替换为实际的值
const DJD = 1.0; // 替换为实际的值
const DP = 1.0; // 替换为实际的值
const CUR = 1.0; // 替换为实际的值
const YP = 1.0; // 替换为实际的值
const YCT = 1.0; // 替换为实际的值
const SCTZ = 1.0; // 替换为实际的值
const SJZ = 1.0; // 替换为实际的值
const CT = 1.0; // 替换为实际的值
const ROU = 1.0; // 替换为实际的值
const YZ = 1.0; // 替换为实际的值

// 定义数学表达式
const expr1 = math.parse(`(FN*(2.25+ZXB)/(6.13*ZXB)*2/AR/sind(DJD)*pi*DP*DP/8/CUR/CUR-FN*sind(DJD))*YP-YCT*SCTZ+FN*sind(DJD)*YP/2+FN*cosd(DJD)*SJZ==0`);
const expr2 = math.parse(`FN*(2.25+ZXB)/(6.13*ZXB)*2/AR/sind(DJD)*pi*DP*DP/8/CUR/CUR`);
const expr3 = math.parse(`FN*sind(DJD)`);
const expr4 = math.parse(`FN*cosd(DJD)`);
const expr5 = math.parse(`(TPA*8/0.49/pi/CT/ROU/pi^3/DP^4)^0.5`);
const expr6 = math.parse(`(TPB*8/0.49/pi/CT/ROU/pi^3/DP^4)^0.5`);
const expr7 = math.parse(`36.2*(N*60/235.7)`);
const expr8 = math.parse(`52.2*(n*60/235.7)`);
const expr9 = math.parse(`-(YCT+YR-YZ)`);

// 计算结果
const FNResult = math.evaluate(expr1, FN);
const FNValue = FNResult[0].eval({ ZXB, AR, DJD, DP, CUR, YP, YCT, SCTZ, SJZ });
const TPAResult = expr2.eval({ ZXB, AR, DJD, DP, CUR, FN: FNValue });
const XRResult = expr3.eval({ DJD, FN: FNValue });
const YRResult = expr4.eval({ DJD, FN: FNValue });
const TPBResult = expr2.eval({ ZXB, AR, DJD, DP, CUR, FN: XRResult });
const NResult = expr5.eval({ TPA: TPAResult });
const nResult = expr6.eval({ TPB: TPBResult });
const TRResult = expr7.eval({ N: NResult });
const TrResult = expr8.eval({ n: nResult });

console.log('FN:', FNValue);
console.log('TPA:', TPAResult);
console.log('XR:', XRResult);
console.log('YR:', YRResult);
console.log('TPB:', TPBResult);
console.log('N:', NResult);
console.log('n:', nResult);
console.log('TR:', TRResult);
console.log('Tr:', TrResult);