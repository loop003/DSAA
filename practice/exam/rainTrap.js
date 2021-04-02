// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1] 输出: 6

// 快慢指针, 判断情况过多
function trap(nums) {
  const len = nums.length
  let p = 0, c = 1, water = 0, bottom = 0

  while (c < len) {
    if (nums[c] >= nums[p]) {
      const width = c - p -1
      if (width >= 1){
        // 减去底部
        water = water + width * nums[p] - bottom
      }
      bottom = 0
      p = c
      c++
    }else if (nums[c] > nums[c+1] && nums[c] >= nums[c-1] || c + 1 >= len) {
      while (nums[p+1] >= nums[c]) {
        p++
        bottom -= nums[p]
      }
      const h = Math.min(nums[p], nums[c])
      const width = c - p -1
      if (width >= 1){
        water = water + width * h - bottom
        bottom = 0
      }
      p = c
    } else {
      bottom += nums[c]
    }
    c++
  }

  return water
}

// 对撞指针
function trap2(nums) {
  let left = 0, right = nums.length - 1, leftTop = nums[0], rightTop = nums[len-1], water = 0

  while (left < right) {
    const lH = nums[left], rH = nums[right]
    if (leftTop <= rightTop) {
      leftTop = Math.max(leftTop, lH)
      water += leftTop - lH
      left++
    } else {
      rightTop = Math.max(rightTop, rH)
      water += rightTop - rH
      right--
    }
  }
  return water
}


console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]))