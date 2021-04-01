function paintHouses (h) {
  const n = h.length, colors = h[0].length
  const res = Array.from({length: n}, () => Array.from({length: colors}, () => 0))
  for (let i=0; i<colors; i++) {
    res[0][i] = h[0][i]
  }

  for (let i=1; i < n; i++) {
    for (let j=0; j < colors; j++) {
      const cost = h[i][j]
      let k = colors -1
      let cur = Infinity
      while (k>=0) {
        if (k != j) {
          cur = res[i-1][k] + cost < cur ? res[i-1][k] + cost : cur
        }
        k--
      }
      res[i][j] = cur
    }
  }
  return Math.min(...res[n-1])
}

// 滚动数组, 在原数组上改动，叠加
// 降低空间复杂度
function paintHouses2(h) {
  const n = h.length
  if (!h || n===0) return
  const colors = h[0].length

  for (let i=1; i < n; i++) {
    for (let j=0; j < colors; j++) {
      const cost = h[i][j]
      let k = colors -1
      let cur = Infinity
      while (k >= 0) {
        if (k != j) {
          cur = h[i-1][k] + cost < cur ? h[i-1][k] + cost : cur
        }
        k--
      }
      h[i][j] = cur
    }
  }
  return Math.min(...h[n-1])
}

const h = [[17,2,17],[16,16,10],[14,3,19]]
console.log(paintHouses(h))
console.log(paintHouses2(h))
console.log(h)