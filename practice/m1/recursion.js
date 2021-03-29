// 给定一个没有重复数字的序列，返回其所有可能的全排列。

function arrange(nums) {
  const res = []
  const visited = {}
  const cur = []
  const len = nums.length

  function dfs(n) {
    if (n === len) {
      res.push([...cur])
      return
    }
    for (let i=0; i<len; i++) {
      const val = nums[i]
      if (!visited[val]) {
        visited[val] = true
        cur.push(val)
        dfs(n+1)
        cur.pop()
        visited[val] = false
      }
    }
  }
  dfs(0)
  return res
}

// 组合：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。
// 输入: nums = [1,2,3]
// [3],
// [1],
// [2],
// [1,2,3],
// [1,3],
// [2,3],
// [1,2],
// []
// ]
function subsets(nums) {
  const res = []
  const cur = []
  const len = nums.length

  function dfs(n) {
    res.push([...cur])
    for (let i=n; i<len; i++) {
      cur.push(nums[i])
      dfs(i+1) // 
      cur.pop()
    }
  }

  dfs(0)
  return res
}

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
function combine(n, k) {
  const res = []
  const cur = []

  function dfs(x) {
    if (cur.length === k) {
      res.push([...cur])
      return
    }
    for (let i=x; i<=n; i++) {
      cur.push(i)
      dfs(i+1)
      cur.pop()
    }
  }
  dfs(1)
  return res
}


const nums = [1,2,3]
// console.log(subsets(nums))
console.log(combine(4, 2))