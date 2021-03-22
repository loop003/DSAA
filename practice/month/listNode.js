function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 *
 */
const L1 = new ListNode(1)
let curL1 = L1
curL1.next = new ListNode(2)
curL1 = curL1.next
curL1.next  = new ListNode(4)

const L2 = new ListNode(1)
let curL2 = L2
curL2.next = new ListNode(3)
curL2 = curL2.next
curL2.next  = new ListNode(4)
curL2 = curL2.next
curL2.next  = new ListNode(8)


function readList(L) {
  console.log(L.val)
  if (!L.next) return
  readList(L.next)
}

// 合并有序链表
function mergeTwoLists (L1, L2) {
  const head = new ListNode()
  let cur = head
  while(L1 && L2) {
    if (L1.val <= L2.val) {
      cur.next = L1
      L1 = L1.next
    } else {
      cur.next = L2
      L2 = L2.next
    }
    cur = cur.next
  }
  cur.next = L1 ? L1 : L2
  return head.next
}

const LL = mergeTwoLists(L1, L2)
console.log(readList(LL))
