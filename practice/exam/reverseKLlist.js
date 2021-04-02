// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
function ListNode(val) {
  this.val = val
  this.next = null
}

function reverseList(head, k) {
  const dummy = new ListNode()
  dummy.next = head
  let p = dummy, c = head, n = c.next
  // end上一段尾
  let end = p, temp = null

  while (c) {
    for (let i = 0; i<k; i++) {
      if ((i === k-1) || !n) {
        c.next = p
        end.next = c
        end = temp
        p = end
        c = n
        n = n?.next
        break
      } else if (i === 0) {
        temp = c
      }
      c.next = p
      p = c
      c = n
      n = n.next
    }
  }
  return dummy.next
}

const L2 = new ListNode(1)
let curL2 = L2
curL2.next = new ListNode(2)
curL2 = curL2.next
curL2.next = new ListNode(3)
curL2 = curL2.next
curL2.next  = new ListNode(4)
curL2 = curL2.next
curL2.next  = new ListNode(8)

console.log(reverseList(L2, 2))