// 迭代法遍历二叉树
// 先序
function preTraversal(root) {
  const res = []
  if (!root) return
  const stack = [root]

  while (stack.length) {
    const cur = stack.pop()
    res.push(cur.val)
    if (cur.right) stack.push(cur.right)
    if (cur.left) stack.push(cur.left)
  }
  return res
}

// 先序
function postOrderTraversal(root) {
  const res = []
  if (!root) return
  const stack = [root]

  while (stack.length) {
    const cur = stack.pop()
    res.unshift(cur.val)
    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }
  return res
}
//中序
function inorderTraversal(root) {
  if (!root) return
  const res = []
  const stack = []
  let cur = root

  while ( cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}

// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
// 二叉树：[3,9,20,null,null,15,7] => [[3],[9,20],[15,7]]
// 关键：利用队列长度对应层级节点个数
function levelTraversal(root) {
  const res = []
  if (!root) return
  const queue = [root]

  while (queue.length) {
    let level = []
    const len = queue.length
    for (let i=0; i<len; i++) {
      const cur = queue.shift()
      level.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push([...level])
  }
  return res
}

// 翻转一棵二叉树
function invertTree(root) {
  if (!root) return
  // [root.left, root.right] = [root.right, root.left]
  // if (root.left) invertTree(root.left)
  // if (root.right) invertTree(root.right)
  
  // 更好看？
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}

const root = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
};

// console.log(levelTraversal(root))
console.log(root)
console.log(invertTree(root))