// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
function stairClimb(n) {
  const res = []
  res[0] = 0
  res[1] = 1
  res[2] = 2

  function dp(n) {
    if (n>2 && !res[n]){
      res[n] = dp(n-1) + dp(n-2)
    }
    return res[n]
  }

  return dp(n)
}

console.log(stairClimb(5))