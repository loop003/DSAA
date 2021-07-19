var twoSum = function(nums, target) {
  const map = {}
  for (let i=0; i<nums.length; i++) {
      const val = nums[i]
      const res = map[target-val]
      console.log(res)
      if (res!==undefined) {
          return [map[target-val], i]
      }
      map[val] = i
  }
  
  return []
};

const nums = [2,7,11,15],target = 9
console.log(twoSum(nums, target))