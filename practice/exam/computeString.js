// 给你一个“A2B3”这样的字符串，输出“AABBB”
function computeString (str) {
  let res = '', pre = ''

  for (let i=0; i < str.length; i++) {
    const val = str[i]
    let time = val*1
    if (!isNaN(time)) {
      res += pre.repeat(time)
    } else {
      pre = val
    }
  }
  console.log(res)
  return res
}

// “C4(A(A3B)2A)2A”
// num: 2 2
// str: B 
// 维护一个（str， num）元组
// 从右向左，strStack和numStack缓存遇到括号时的子序列
function computeString2 (str) {
  const strStack = [], numStack = []
  let res = '', num = 0

  for (let i=str.length - 1; i >= 0 ; i--) {
    const val = str[i]
    console.log(res)
    if (val >= 0 && val <= 9) {
      num = num * 10 + val*1
    } else if (val === ')') {
      // 遇到）保存右边的序列和num
      strStack.push(res)
      numStack.push(num)
      res = ''
      num = 0
    } else if (val === '(') {
      // 关键，当前序列*栈顶num，再拼接栈顶str子序列
      res = res.repeat(numStack.pop() || 1) + strStack.pop()
    } else {
      res = val.repeat(num || 1) + res
      num = 0
    }
  }

  console.log(res)
  return res
}

// ('', 3) (a, 2) c
// acc
computeString2('C4(A(A3B)2a)')