// 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
// 要求返回这个链表的 深拷贝
function Node(val) {
  this.val = val 
  next = null
  random = null
}


function cloneDeep(head) {
  const cloneH = new Node()
  let cur = head
  let clone = cloneH
  const nodeMap = new Map()

  while (cur) {
    clone.val = cur.val
    // key point
    clone.next = cur.next ? new Node() : null 
    // 缓存所有节点，便于后续random指定
    nodeMap.set(cur, clone)
    cur = cur.next
    clone = clone.next
  }
  cur = head
  clone = cloneH
  while (cur) {
    clone.random = cur.random ? nodeMap.get(cur.random) : null
    cur = cur.next
    clone = clone.next
  }

  return cloneH
}
