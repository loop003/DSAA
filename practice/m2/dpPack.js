// f[i][c]来表示前 i 件物品恰好装入容量为 c 的背包中所能获得的最大价值。
function dpPack(c, w, v) {
  const n = w.length
  const f = Array.from({length: n}, ()=> Array.from({length: c + 1}, () => 0))
  for ()
}

// const n = 6, v = [20,30,10,70,50,120], w = [3,2,1,4,5,10], c = 20
// console.log(dpPack(n, v, w, c))