// 本质分治思想，相比归并merge，不需用多余空间，直接在数组上修改
function quikSort1 (nums, left=0, right=nums.length-1) {
  if (right <= left) return nums
  const pivot = left
  let i = left+1, j = right
  while (i<=j) {
    while (nums[i] < nums[pivot]) {
      i++
    }
    while (nums[j] > nums[pivot]) {
      j--
    }

    if (i < j) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
  ;[nums[pivot], nums[i-1]] = [nums[i-1], nums[pivot]]
  quikSort(nums, left, i-2)
  quikSort(nums, i, right)

  return nums
}

// 更好理解？数据过多会超过调用栈
function quikSort(nums, left=0, right=nums.length-1) {
  if (right <= left) return nums

  const partitionIndex = partition(nums, left, right)
  quikSort(nums, left, partitionIndex-1)
  quikSort(nums, partitionIndex+1, right)

  return nums
}

function partition(nums, left, right) {
  const pivot = left
  let index = left + 1
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      swap(nums, index, i)
      index ++
    }
  }
  // 和最后一个交换，保持左边都小于nums[pivot]
  swap(nums, pivot, index-1)
  return index - 1
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

module.exports = {
  quikSort1,
  quikSort
}