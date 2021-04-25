// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

function isPalindrome (str) {
  let rm = 0
  let len = str.length
  for (let i=0; i<len/2; i++) {
    if (str[i] !== str[len-i-1] && rm === 1 ) return false
    if (str[i] !== str[len-i-1]){
      if (str[i] === str[len-i-2]) {
        len--
        rm++
      } else if(str[i+1] === str[len-i-1]) {
        len--
        i++
        rm++
      } else {
        return false
      }
    }
  }
  return true
}

// 
function isPalindrome2(str) {
  const len = str.length
  let i = 0, j = len - 1
  while(i < j && str[i]===str[j]) {
    i++
    j--
  }
  
  function isPalin(st, ed) {
    while(st < ed) {
      if (str[st] !== str[ed]) return false
      st++
      ed--
    }
    return true
  }

  // 删除左或右
  return isPalin(i+1, j) || isPalin(i, j-1)
}


const str = 'afdfcfddfa'
console.log(isPalindrome(str))
console.log(isPalindrome2(str))
