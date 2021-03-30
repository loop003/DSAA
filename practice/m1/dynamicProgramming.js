// 动态规划

// 运用递归不能复用，算法复杂太大
// 最优解 
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。
// 状态转移方程：f(amount) = min(f(amount-c1)+1,f(amount-c2)+1,...,f(amount-cn)+1)
function coinChange(coins, amount) {
  const f = new Array(amount+1).fill[Infinity]
  f[0] = 0
  for (let i=1; i<=amount; i++) {
    for (let j=0; j<coins.length; j++) {
      if (i-coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i-coins[j]]+1)
      }
    }
  }
  return f[amount]!==Infinity ? f[amount] : -1
}


// 选不选问题********************************************************************

// 数组内元素和等于S，则返回true,与硬币题区别:不可复用
// 递归方法：
// 传i降低空间复杂度
function resNums(nums, i, s) {
  const curr = nums[i]
  if (s === 0) {
    return true
  } else if (i===0) {
    return curr === s
  } else if (curr > s) {
    return resNum(nums, i-1, s)
  }

  const A = resNums(nums, i-1, s)
  const B = resNums(nums,i-1, s-curr)

  return A || B
}

// 迭代
function dpNums(nums, s) {
  const len = nums.length
  // 利用生成函数生成二维数组
  const f = Array.from({length: len}, v => Array.from({length: s+1}, () => false))
  for (let i=0; i<len; i++) {
    f[i][0] = true
  }
  f[0][4] = true
  for (let i=1; i<s+1; i++) {
    for (let j=1; j<len; j++) {
      if (i < nums[j]) {
        f[j][i] = f[j-1][i]
      } else {
        f[j][i] = f[j-1][i-nums[j]] || f[j-1][i]
      }
    }
  }
  return f[len-1][s]
}

// 背包问题
// n 件物品价值数组v，体积w，背包体积c
function dpPack(n, v, w, c) {
  const f = Array.from({length: n}, v => Array.from({length: c+1}, () => 0))
  for (let i=1; i<=c; i++) {
    if (i >= w[0]) {
      f[0][i] = v[0]
    }
  }
  for (let i=1; i<n; i++) {
    for (let j=1; j<=c; j++) {
      const A = f[i-1][j]
      let B = 0
      if (j >= w[i]) {
        B = f[i-1][j-w[i]] + v[i]
      }
      f[i][j] = Math.max(A, B)
    }
  }
  return f[n-1][c]
}

// 给定一个无序的整数数组，找到其中最长上升子序列的长度
function lengthOfLIS(nums) {
  const len = nums.length
  const dp = new Array(len).fill(1)
  for (let i=1; i<len; i++) {
    let j = i - 1 
    while (j >= 0) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i-1], dp[j] + 1)
        break
      }
      j--
    }
  }
  return dp[len-1]
}

// const n = 6, v = [20,30,10,70,50,120], w = [3,2,1,4,5,10], c = 20
// console.log(dpPack(n, v, w, c))

// const nums = [4, 66, 7, 2, 5,9], s = 1
// console.log(dpNums(nums, s))
const nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums))