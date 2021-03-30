// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

function islandsCuont(gird) {
  const len = gird.length, width = gird[0].length
  // 格子水平垂直方向检查
  const moveX = [0, 0, -1, 1], moveY = [-1, 1, 0, 0]
  let count = 0

  for(let y=0; y<len; y++) {
    for (let x=0; x<width; x++) {
      if (gird[y][x] === 1) {
        dfs(y, x)
        count++
      }
    }
  }

  function dfs(y, x) {
    if (y >= len || y < 0 || x < 0 || x >= width || gird[y][x] === 0) return
    // 遍历过的设为0，防止重复遍历，死循环
    gird[y][x] = 0
    for (let i=0; i<4; i++) {
      dfs(y+moveY[i], x+moveX[i])
    }
  }

  return count
}

const grid = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,1,0,1]
]

console.log(islandsCuont(grid))