#include <stdio.h>
#include <math.h>

int main() {
    double FN, TPA, XR, YR, TPB, N, JJJ, n, DJJ, YZG;
    double ZXB = 1.0; // 替换为实际的值
    double AR = 1.0; // 替换为实际的值
    double DJD = 1.0; // 替换为实际的值
    double YP = 1.0; // 替换为实际的值
    double YCT = 1.0; // 替换为实际的值
    double SCTZ = 1.0; // 替换为实际的值
    double SJZ = 1.0; // 替换为实际的值
    double DP = 1.0; // 替换为实际的值
    double CUR = 1.0; // 替换为实际的值
    double CT = 1.0; // 替换为实际的值
    double ROU = 1.0; // 替换为实际的值
    double YZ = 1.0;

    FN = ((FN * (2.25 + ZXB)) / (6.13 * ZXB) * 2 / AR / sin(DJD) * M_PI * DP * DP / 8 / CUR / CUR - FN * sin(DJD)) * YP - YCT * SCTZ + FN * sin(DJD) * YP / 2 + FN * cos(DJD) * SJZ;
    TPA = FN * (2.25 + ZXB) / (6.13 * ZXB) * 2 / AR / sin(DJD) * M_PI * DP * DP / 8 / CUR / CUR;
    XR = FN * sin(DJD);
    YR = FN * cos(DJD);
    TPB = TPA - XR;
    N = sqrt(TPA * 8 / (0.49 * M_PI * CT * ROU * pow(M_PI, 3) * pow(DP, 4)));
    JJJ = 36.2 * (N * 60 / 235.7);
    n = sqrt(TPB * 8 / (0.49 * M_PI * CT * ROU * pow(M_PI, 3) * pow(DP, 4)));
    DJJ = 52.2 * (n * 60 / 235.7);
    YZG = -(YCT + YR - YZ);

    printf("FN = %.2lf\n", FN);
    printf("TPA = %.2lf\n", TPA);
    printf("XR = %.2lf\n", XR);
    printf("YR = %.2lf\n", YR);
    printf("TPB = %.2lf\n", TPB);
    printf("N = %.2lf\n", N);
    printf("JJJ = %.2lf\n", JJJ);
    printf("n = %.2lf\n", n);
    printf("DJJ = %.2lf\n", DJJ);
    printf("YZG = %.2lf\n", YZG);

    return 0;
}
