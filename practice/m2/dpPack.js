// f[i][c]来表示前 i 件物品恰好装入容量为 c 的背包中所能获得的最大价值。
function dpPack(n, v, w, c) {
  const dp = new Array(c+1).fill(0)

  for (let i=0; i<n; i++) {
    // for (let j=w[i]; j<=c; j++) 会重复相加
    // dp[j] 维护一个容量为j的最大收益
    for (let j=c; j>=w[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j-w[i]]+v[i])
    }
  }
  
  return dp[c]
}


const n = 6, v = [20,30,10,70,50,120], w = [3,2,1,4,5,10], c = 20
console.log(dpPack(n, v, w, c))