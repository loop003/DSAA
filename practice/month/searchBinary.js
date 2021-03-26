// Binary Search Tree 二叉搜索树强调的是数据域的有序性: 
// 二叉搜索树上的每一棵子树，都应该满足 左孩子 <= 根结点 <= 右孩子 这样的大小关系

// 搜索
function searchTree(root, n) {
  if (!root) return

  if (root.val === n) {
    console.log(root)
  } else if (n < root.val) {
    searchTree(root.left, n)
  } else {
    searchTree(root.right, n)
  }
}

// 插入
function treeNode(val) {
  this.val = val
  this.left = this.right = null
}

function insertTree(root, n) {
  if (!root) { 
    root = new treeNode(n)
    return root
  }

  if (n < root.val) {
    root.left = insertTree(root.left, n)
  } else {
    root.right = insertTree(root.right, n)
  }
  return root
}

// 删除节点
// 方法1 时间复杂度O(H),空间复杂度O(H)
// 其无左子：其右子顶替其位置，删除了该节点；
// 其无右子：其左子顶替其位置，删除了该节点；
// 其左右子节点都有：其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点
// 优点保持二叉树平衡

function deleteNode(root, n) {
  if (!root) return

  if (n > root.val) {
    root.right = deleteNode(root.right, n)
  } else if (n < root.val) {
    root.left = deleteNode(root.left, n)
  } else {
    if (root.left && !root.right) {
      root = root.left
    } else if (!root.left && root.right) {
      root = root.right
    } else if (root.left && root.right) {
      const leftChild = root.left
      root = root.right
      let cur = root
      // 寻找右子树最左节点
      while (cur) {
        if (!cur.left){
          cur.left = leftChild
          break
        }
        cur = cur.left
      }
    }else {
      root = null
    }
  }
  return root
}

// 方法2 
// 其无左子：其右最小节点覆盖val
// 其无右子：其左最大节点覆盖val
// 其左右子节点都有：左右任一
function deleteNode2(root, n) {
  if (!root) return

  if (n > root.val) {
    root.right = deleteNode(root.right, n)
  } else if (n < root.val) {
    root.left = deleteNode(root.left, n)
  } else {
    if (!root.left && !root.right) {
      root = null
    } else if (root.right) {
      let cur = root.right
      while (cur) {
        if (!cur.left) {
          root.val = cur.val 
          break
        }
        cur = cur.left
      }
      root.right = deleteNode2(root.right, cur.val)
    } else {
      let cur = root.left
      while (cur) {
        if (!cur.right) {
          root.val = cur.val 
          break
        }
        cur = cur.right
      }
      root.left = deleteNode2(root.left, cur.val)
    }
  }
  return root
}


// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
function isBSTree(root) {
  if (!root) return true
  if (root.val < root.left?.val || root.val > root.right?.val) return false
  return isBSTree(root.left) && isBSTree(root.right)
}


// 高度平衡的叉树：是任意结点的左右子树高度差绝对值都不大于1的二叉搜索树。
// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索
//  [-10,-3,0,5,9] => 一个可能的答案是 [0,-3,9,-10,null,5]
// 二分法？
function sortedArrayToBST(arr) {
  if (!Number.length) return null

  function toTree(start, end) {
    if (start > end) return null

    const mid = Math.floor((end+start)/2)
    const root = new treeNode(arr[mid])
    root.left = toTree(start, mid-1)
    root.right = toTree(mid+1, end)
    return root
  }
  
  return toTree(0, arr.length-1)
}

// 给定一个二叉树，判断它是否是高度平衡的二叉树
// 任意结点
// 左右子树高度差绝对值都不大于1
// 二叉搜索树
function isBalanceTree(root) {
  if (!root) return
  let flag = true

  function dfs(root) {
    if(!root || !flag) return 0

    const leftH = dfs(root.left)
    const rightH = dfs(root.right)
    if(Math.abs(leftH-rightH) > 1) {
      flag = false
      return 0
    } else {
      return leftH > rightH ? leftH + 1 : rightH + 1
    }
  }

  dfs(root)
  return flag
}

// 给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
function balanceBST() {
  const nums = []
  // inorder取出有序数组
  function inorder(root) {
    if(!root) return
    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }

  function toBST(start, end) {
    if (start > end) return null

    const mid = Math.floor((start+end)/2)
    const root = new treeNode(nums[mid])
    root.left = toBST(start, mid-1)
    root.right = toBST(mid+1, end)
    
    return root
  }

  inorder(root)
  return toBST(0, nums.length-1)
}


const root = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 4,
    left: {
      val: 3
    },
    right: {
      val: 5,
      left: {
        val: 9
      }
    }
  }
}
// searchTree(root, 3)
// console.log(new treeNode(2))
// console.log(isBSTree(root))
const bl = sortedArrayToBST([-10,-3,0,5,9,12,13])
console.log(isBalanceTree(root))
console.log(isBalanceTree(balanceBST(root)))