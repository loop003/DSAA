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

const str = 'afdfcfddfa'
console.log(isPalindrome(str))
