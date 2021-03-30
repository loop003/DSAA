// 根据一棵树的前序遍历与中序遍历构造二叉树。
// 假设树中没有重复元素
const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7], post = [9, 15, 7, 20, 3]

function treeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}
// 递归
function buildTree1(p, i) {
  const root = new treeNode(p[0])
  const k = i.indexOf(root.val)
  if (k === 0) return root
  root.left = buildTree1(p.slice(1, k+1), i.slice(0, k))
  root.right = buildTree1(p.slice(k+1), i.slice(k+1))
  return root
}

// 改进，直接操作索引，减少空间复杂度
// 确保左右子树的前序遍历与中序遍历对应,关键leftL = k - iL
function buildTree(p, i) {
  function build(pL, pR, iL) {
    const root = new treeNode(p[pL])
    const k = i.indexOf(root.val)
    const leftL = k - iL
    if (leftL <= 0) return root
    root.left = build(pL+1, pL+leftL, iL)
    root.right = build(pL+leftL+1, pR, k+1)
    return root
  }
  return build(0, p.length-1, 0)
}

// 后续与中序post inorder
// 注意左右子树边界
function buildTreeByPI(p, i) {

  function build(pL, pR, iL) {
    const root = new treeNode(p[pR])
    const k = i.indexOf(root.val)
    const leftL = k - iL
    if (leftL <= 0) return root
    root.left = build(pL, pL+leftL-1, iL)
    root.right = build(pL+leftL, pR-1, k+1)
    return root
  }
  return build(0, p.length-1, 0)
}
console.log(buildTree(preorder, inorder))
console.log(buildTreeByPI(post, inorder))