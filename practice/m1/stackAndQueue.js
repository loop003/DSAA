// 栈
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

const isValid = (str) => {
  const stack = []
  for (let i=0; i<str.length; i++) {
    switch (str[i]) {
      case '(':
        stack.push('(')
        break
      case '{':
        stack.push('{')
        break
      case '[':
        stack.push('[')
        break
      case ')':
        if (stack.pop() !== '(') return false
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
    }
  }
  
  return stack.length === 0
}

// 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
// 如果之后都不会升高，请在该位置用 0 来代替。
// 给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
// 因此时间复杂度就是O(n)
// 维持单调递减栈
const tampRaise = (arr) => {
  const stack = []
  const len = arr.length
  const res = new Array(len).fill(0)
  for (let i=0; i<len; i++) {
    while(stack.length && arr[i] > arr[stack.length-1]) {
      top = stack.pop()
      res[top] = i - top
    }
    // 关键：是索引
    stack.push(i)
  }

  return res
}

// 最小栈 0 1 2 3 0 4
// 0 -1
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
const MinStack = function() {
  const stack = []
  // 维持一个递减的最小栈
  const stack2 = []
};

MinStack.prototype.push = function(item) {
  this.stack.push(item)
  if (stack2.length === 0 || item <= stack2[stack2.length-1]) {
    stack2.push(item)
  }
}

MinStack.prototype.pop = function() {
  const item = this.stack.pop()
  if (item === this.stack2[this.stack2.length-1]) {
    this.stack2.pop()
  }
}
 
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

MinStack.prototype.getMin = function() {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length-1];
};

// 使用栈实现队列的下列操作
// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空

// 思路：使用两个队列实现，stack2倒转实现pop和peek操作
class Queue {
  constructor(...args) {
    this.stack = [...args]
    this.stack2 = []
  }

  push(x) {
    this.stack.push(x)
  }
  pop() {
    // stack2还要则直接取
    if (this.stack2.length <= 0) {
      if(this.stack.length <= 0 ) return
      while (this.stack.length > 0) {
        this.stack2.push(this.stack.pop())
      }
    }
    return this.stack2.pop() 
  }
  peek() {
    if (this.stack2.length <= 0) {
      if(this.stack.length <= 0 ) return
      while (this.stack.length > 0) {
        this.stack2.push(this.stack.pop())
      }
    }
    return this.stack2[this.stack2.length-1]
  }
  empty() {
    return !this.stack2.length && !this.stack.length
  }
}

// 双端队列，双端队列就是允许在队列的两端进行插入和删除的队列
// 真题：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
const maxSlidingWindow = function (nums, k) {
  const res = []
  const sw = []
  for (let i=0; i<nums.length; i++) {
    while (sw.length > 0 && nums[i] >= nums[sw[sw.length-1]]) {
      sw.pop()
    }
    sw.push(i)
    if (k-1 <= i) {
      while (i-sw[0] >= k) {
        sw.shift()
      }
      res.push(nums[sw[0]])
    }
  }
  return res
}


const str = '{({[]})}{}'
// console.log(isValid(str))
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// console.log(tampRaise(temperatures))
// const Q1 = new Queue(1,2,3,4)
let nums = [1,3,-1,-3,5,3,6,7]
console.log(maxSlidingWindow(nums,3))

