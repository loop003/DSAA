
// 大数和
function solve( s ,  t ) {
  const l1 = s.split('').reverse()
  const l2 = t.split('').reverse()
  const n1 = l1.length, n2 = l2.length
  const len = Math.max(n1, n2)
  const res = Array.from({length: len}, () => 0)
  
  for (let i=0; i<len; i++) {
    let sum
    if (i < n1 && i< n2) {
      sum = l1[i]*1 + l2[i]*1 + res[i]
    } else if (i < n1) {
      sum = l1[i]*1 + res[i]
    } else {
      sum = l2[i]*1 + res[i]
    }
    console.log(sum,res)
    if (sum < 10) {
      res[i] = sum
    } else {
      res[i] = sum%10
      res[i+1] = 1 
    }
  }
  
  return res.reverse().join('')
}

console.log(solve('9', '99'))

// string 方法
function solve( s ,  t ) {
  let res = ''
  let i = s.length-1, j = t.length-1, carry = 0

  while(i >=0 || j >= 0 || carry > 0) {
    const x = i < 0 ? 0 : s[i--]*1
    const y = j < 0 ? 0 : t[j--]*1
    const sum = x + y + carry
    res += sum%10
    carry = Math.floor(sum/10)
  }
  return res.split('').reverse().join('')
}