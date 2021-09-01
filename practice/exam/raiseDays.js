// 关键，用stack存储数组下标
const raiseDays = (tems) => {
  const len = tems.length
  const res = new Array(len).fill(0), indexs = []

  for (let i = 0; i < len; i++) {
    while (indexs.length > 0 && tems[i] > tems[indexs[indexs.length-1]]) {
      const j = indexs.pop()
      res[j] = i - j
    }
    indexs.push(i)
  }

  return res
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(raiseDays(temperatures))