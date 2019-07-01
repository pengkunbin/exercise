
const superEggDrop = function (K = 1, N = 2) {


};

const minDrop = function (K, N, count) {

    minDrop(K - 1, parseInt(N / 2)+1) > minDrop(K)
    return count++
} 

var superEggDrop = function(K, N) {  
    if (N == 1) {  
        return 1;  
    }  
    var dp = new Array(K + 1).fill().map(v=>new Array(2).fill(1));  
    for (var i = 1; i <= N; i++) {  
        dp[1][i] = i;  
    }  
    for (var i = 2; i <= K; i++) {  
        for (var j = 2; ; j++) {  
            dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1] + 1;
            console.log(dp[i][j])  
            if (dp[i][j] >= N) {  
                break;  
            }  
        }  
    }  
    return dp[K].length - 1;  
};  