// 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 

// 暴力 O(n^2)
function twoNumSum1 (nums, target) {
  for (let i=0; i<nums.length; i++) {
    const index = nums.indexOf(target-nums[i])
    if (index !== -1) return [i, index]
  }
  return []
}

// 空间复杂度交换时间复杂度 O(n)
function twoNumSum2 (nums, target) {
  const tem = {}
  const len = nums.length
  for (let i=0; i<len; i++) {
    const value = nums[i]
    if (tem[target-value] !== undefined) return [tem[target-value], i]
    tem[value] = i
  }
  return []
}

 const nums = [2, 7, 11, 15, 4, 6, 0, 77,89,343,6,24,45,88,99,888], target = 900


console.time('1')
console.log(twoNumSum1(nums, target))
console.timeEnd('1')

console.time('2')
console.log(twoNumSum2(nums, target))
console.timeEnd('2')