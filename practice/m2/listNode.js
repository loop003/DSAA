function ListNode (val, next) {
  this.val = val
  this.next = next === undefined ? null : next
}
/**
 *
 */
const L1 = new ListNode(1)
let curL1 = L1
let t = curL1
curL1.next = new ListNode(2)
curL1 = curL1.next

curL1.next  = new ListNode(4)
curL1 = curL1.next
curL1.next = t

const L2 = new ListNode(1)
let curL2 = L2
curL2.next = new ListNode(3)
curL2 = curL2.next
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

// 有序链表去重
function deleteDuplicates (head) {
  let cur = head
  while(cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else { 
      cur = cur.next
    }
  } 
  return head
}

// 有序链表去重,只保留原始链表中 没有重复出现的数字。
// 1 3 3 4 8
function deleteDuplicatesAll (head) {
  let font = head
  let cur = font
  while(cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
      while (cur.val === cur.next.val) {
        cur.next = cur.next.next
      }
      cur = cur.next
      font.next = cur
    } else {
      font = cur 
      cur = cur.next
    }  
  }
  return head
}

// 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
function deleteN (head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy
  let len = 0
  while(fast.next) {
    fast = fast.next
    len++
    if (len-n > 0) {
      slow = slow.next
    }
  }
  slow.next = slow.next.next
  return dummy.next
}

function deleteN2 (head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy

  while(n > 0) {
    fast = fast.next
    n--
  }
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}

// 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
// 关键：把每个结点 next 指针的指向给反过来就行了
function reverseList(head) {
  let pre = null
  let cur = head

  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// 局部反转：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 0 1 3p 3 4 8
function reverseBetween(head, m, n) {
  const dummy = new ListNode()
  dummy.next = head
  let leftHead = dummy.next
  let pre, cur, next
  // 先走m-1步
  for (let i=0; i<m-1; i++) {
    leftHead = leftHead.next
  }
  pre = leftHead.next
  let right = pre
  cur = pre.next
  let walk = n-m

  while (walk-- > 0) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  right.next = cur
  // cur.next = pre
  leftHead.next = pre

  return dummy.next
}

// 环链表
// 给定一个链表，判断链表中是否有环。
function hasCircle (head) {
  while(head) {
    if(head.flag) return true
    head.flag = true
    head = head.next 
  }
  return false
}

// 双指针
function hasCircle2(head) {
  let slow = head
  let fast = head

  while(fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) return true
  }
  return false
}

const head = new ListNode()
const head2 = new ListNode()
head.next = L1
head2.next = L2
// console.log(readList(head))
// console.log(readList(deleteDuplicates(head)))
console.log(L1)
// console.log(readList(deleteDuplicatesAll(head2)))
// console.log(readList(deleteN2(head2,1)))
// console.log(readList(reverseList(head2)))
// console.log(readList(reverseBetween(head2,2,5)))
console.log(hasCircle2(L1))
