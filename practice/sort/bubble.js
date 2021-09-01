const bubbleSort = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n-i-1; j++) {
      if (nums[j] > nums[j+1]) {
        ;[nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums
}

// 改进pos记录最新交换的位置
const bubbleSort1 = function (nums) {
  const n = nums.length
  let i = n-1
  while(i > 0){
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
        pos = j // 记录最后一个交换的位置
      }
    }
    i = pos
  }
  return nums
}

// 双指针,这个没看懂，好像优化不多
const bubbleSort2 = function (nums) {
  var low = 0;
  var high= nums.length-1; //设置变量的初始值
  var j;
  while (low < high) {
    let pos1 = pos2 = 0
    for (j= low; j< high; ++j) //正向冒泡,找到最大者
      if (nums[j]> nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
        pos1 = j
    }
    high = pos1                 //修改high值, 前移一位
    for (j=high; j>low; --j) //反向冒泡,找到最小者
      if (nums[j]<nums[j-1]) {
        [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
        pos2 = j-1
      }
    low = pos2               //修改low值,后移一位
  }
  return nums;
}

module.exports = {
  bubbleSort,
  bubbleSort1,
  bubbleSort2
}

