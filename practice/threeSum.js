// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。 

// 思路双指针，多用于有序数组中求和、比值
// 1 1 1 2 3 4 5 6 7 8 9
function threeSum(nums) {
  const result = []
  nums.sort((a,b) => a-b)
  const len = nums.length
  console.log(nums)

  for (let i=0; i<len-2; i++) {
    let j = i + 1, k = len - 1
    if ( nums[i] === nums[i-1]) continue
    if ( nums[i] >= 0) break
    while(j < k) {
      if (nums[i]+nums[j]+nums[k] > 0) {
        k--
      }else if(nums[i]+nums[j]+nums[k] < 0) {
        j++
      }else{
        // 去掉左指针重复值
        if (nums[j] > nums[j-1] || j === i+1) result.push([nums[i], nums[j], nums[k]])
        j++
        k--
      }
    }
  }
  return result
 }

const nums = [-1, 0, 1, 2,2,2, -1, -1, -4]
console.log(threeSum(nums))