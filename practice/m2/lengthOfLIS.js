// 给定一个无序的整数数组，找到其中最长上升子序列的长度，注意不是连续的序列

// 通用解题思路的核心，是利用递归思想，以“倒推”为抓手，快速地明确状态与状态间的关系。
function lengthOfLIS (nums) {
  const len = nums.length
  if(!len) return 0
  const dp = new Array(len).fill(1)

  for (let i=1; i<len; i++) {
    // 关键每个回头对比，维护i点的最长上升序列
    for (let j=i-1; j>=0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i-1], dp[j] + 1)
        break
      }
    }
  }
  return dp[len-1]
}

const nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums))