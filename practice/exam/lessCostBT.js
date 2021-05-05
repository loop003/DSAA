// 小团有一个由N个节点组成的二叉树，每个节点有一个权值。
// 定义二叉树每条边的开销为其两端节点权值的乘积，二叉树的总开销即每条边的开销之和。
// 小团按照二叉树的中序遍历依次记录下每个节点的权值，即他记录下了N个数，
// 第i个数表示位于中序遍历第i个位置的节点的权值。之后由于某种原因，小团遗忘了二叉树的具体结构。
// 在所有可能的二叉树中，总开销最小的二叉树被称为最优二叉树。
// 现在，小团请小美求出最优二叉树的总开销。
const n = 29
let root = [7, 5, 6, 1, 3, 5, 6, 1, 3, 5, 6, 1, 3, 5, 6, 1, 3, 5, 6, 1, 3, 5, 6, 1, 3, 5, 6, 1, 3]

const lessCost = function() {
  // 三维数组
  const res = Array.from({length: n+1},
              () => Array.from({length: n+1},
                () => Array.from({length: n+1}, 
                  () => -1)))
  // 加一个虚拟根节点

  root.unshift(0)

  // p父节点
  function dp(l, h, p) {
    if (l > h) return 0
    if (res[l][h][p] !== -1) return res[l][h][p]
    let cur = Infinity
    for (let i = l; i <= h; i++) {
      const left = dp(l, i-1, i)
      const right = dp(i+1, h, i)
      cur = Math.min(cur, left + right + root[i]*root[p])
    }
    return res[l][h][p] = cur
  }
  
  return dp(1, n, 0)
}

console.log(lessCost())