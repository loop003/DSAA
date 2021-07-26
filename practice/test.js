
// const len = 100000


// console.time('a')
// const dp1 = Array.from({length: len}, () => 0)
// console.timeEnd('a')

// console.time('i')
// const dp = new Array(len).fill(0)
// console.timeEnd('i')


function computeString( str ) {
  // write code here
const strList = str.split(/[\*\[\]]+/)
let res = ''
for (let i = strList.length-1; i >= 0; i--) {
  const val = strList[i]
  const len = val&&val.length
  if (len > 0) {
    const strTime = val.match(/\d+$/)
    console.log(strTime)
    if (strTime) {
      let time = strTime[0]*1
      const tem = res
      while (time > 1) {
        res = res + tem
        time--
      }
      console.log(val.slice(0, len-strTime[0].length))
      res = val.slice(0, len-strTime[0].length) + res
    } else {
      res = val + res
    }
  }
}
console.log(res)
return res
}

computeString('3*[a2*[c]')