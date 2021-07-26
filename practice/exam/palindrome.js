// 返回字符串中最长回文

// 维护一个是否为回文的二维数组
// i,j 两个指定特定长度的子序列前后，判断是否为回文，dp[i][j] = ap[i+1][j-1] 存储是否为回文
// Array.from不要使用，比new Array慢
function palindrome(str) {
  const len = str.length
  // 生成函数: (value, index) ; 初始化输出子序列长度(n<=1)则为true
  const dp = Array.from({length: len}, (_, i) => Array.from({length: len}, (_, j) => i>=j))
  let st = 0, end = 0
  // n为子序列长度, 复用关键
  // n=2预处理, 
  // for (let i=0; i<len-1; i++) {
  //   if (str[i]===str[i+1]) {
  //     dp[i][i+1] = true
  //     st = i
  //     end = i+1
  //   }
  // }
  for (let n=2; n<=len; n++) {
    // 窗口长度为n的序列，滑动取值
    for (let i=0; i<=len-n; i++) {
      const j = i + n -1
      // 子序列不是回文则不是
      if (dp[i+1][j-1]) {
        if (str[i]===str[j]) {
          dp[i][j] = true
          st = i
          end = j
        }
      }
    }
  }
  return str.slice(st, end+1)
}

function palindrome2(str) {
  const len = str.length
  if (!len) return 0
  let dp = new Array(len)
  for(let i=0;i<len;i++) {
    dp[i] = new Array(len)
    dp[i][i] = true
  }
  let st = 0, end = 0
  
  for (let n=2; n<=len; n++) {
    for (let i=0; i<=len-n; i++) {
      const j = i + n - 1
      if (dp[i+1][j-1] || n === 2) {
        if (str[i] === str[j]) {
          dp[i][j] = true
          st = i
          end = j
        } else {
          dp[i][j] = false
        }
      }
    }
  }

  return str.slice(st, end+1)
}

console.log(palindrome2('tegabaabago'))

