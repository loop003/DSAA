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
const tampRaise = (arr) => {
  const stack = []
  const len = arr.length
  const res = new Array(len).fill(0)
  for (let i=0; i<len; i++) {
    while(stack.length && arr[i] > arr[stack.length-1]) {
      top = stack.pop()
      res[top] = i - top
    }
    stack.push(i)
  }

  return res
}

// 最小栈 0 1 2 3 0 4
// 0 -1
const MinStack = function() {
  const stack = []
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

const str = '{({[]})}{}'
// console.log(isValid(str))
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(tampRaise(temperatures))