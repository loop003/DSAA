// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 完全二叉树, 数组
function bTreeCommonAncestor(root, p, q) {
  const len = root.length
  if (!root || !len) return
  let i = root.indexOf(p), res = 0
  const j = root.indexOf(q)

  for (i; i > 0;) {
    if (hasChild(i, j)) {
      res = i
      break
    }
    i = Math.floor((i-1)/2)
  }

  function hasChild(parent, child) {
    if (parent >= len) return false

    const left = 2*parent + 1, right = 2*parent + 2
    if (child === left || child === right || child === parent) {
      return true
    } else if ( child < left) {
      return false
    } else {
      return hasChild(left, child) || hasChild(right, child)
    }
  }

  return root[res]
}


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 一般树结构
// 有效汇报
function bTreeCommonAncestor2(root, p, q) {
  
  function dfs(root) {
    if (!root || root === p || q === root) return root

    const left = dfs(root.left)
    const right = dfs(root.right)
    if (left && right) return root

    return left || right
  }
  return dfs(root)
}

const root = [3,5,1,6,2,0,8,null,null,7,4]

console.log(bTreeCommonAncestor(root, 5, 4))