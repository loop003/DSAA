// 冒泡
// n(n-1)/2 -> O(n^2)
function bubbleSort(nums) {
  const len = nums.length
  let 

  for (let i=0; i<len; i++) {
    // 优化算法，只要内循环一次没有交换，则说明已排序
    // 最好复杂度O(n)
    let flag = true
    for (let j=0; j<len-1-i; j++) {
      if (nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
        flag = false
      }
    }
    if (flag) return nums
  }
  return nums
}

// 选择排序
// 选择排序的关键字是“最小值”：循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部；
// 然后缩小排序范围，继续重复以上操作，直至数组完全有序为止。
// O(n^2)
function selectSort(nums) {
  const len = nums.length
  for (let i=0; i<len-1; i++) {
    let minIndex = i
    for (let j=i; j<len; j++) {
      if (nums[minIndex] > nums[j]) minIndex = j
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
  }
  return nums
}

// 插入排序
// 插入排序的核心思想是“找到元素在它前面那个序列中的正确位置”。
// O(n)-O(n^2)
function insertSort(nums) {
  const len = nums.length
  for (let i=1; i<len; i++) {
    let j=i
    while (j>0 && nums[j] < nums[j-1]) {
      [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
      j--
    }
  }
  return nums
}


// 归并 
// 关键：分割，有序数组合并
function mergeSort(nums) {
  return run(nums)

  function run(nums) {
    const len = nums.length
    if (len <= 1 ) return nums
    const mid = Math.floor(len/2)
    const res = merge(run(nums.slice(0, mid)), run(nums.slice(mid)))
    return res
  }

  function merge(nums1, nums2) {
    let i = nums1.length - 1, j = nums2.length - 1
    nums1 = [...nums1, ...new Array(j+1).fill(0)]
    let len = nums1.length - 1

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
          nums1[len] = nums1[i]
          i--
        } else {
          nums1[len] = nums2[j]
          j--
        }
        len--
    }
    while (j >= 0) {
      nums1[j] = nums2[j]
      j--
    }
    return nums1
  }
}

// 测试

a = [9,22,4,5,6,7,1,4,74,0,7,3,90]

console.log(mergeSort(a))
// function randArray(len, min, max) {
//   return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
// }
// const L = randArray(10000, 0, 10000)

// const measureDoSomethingTime = (...args) => {
//   const testL = [...L]
//   const fn = args.shift()
//   console.time(fn.name)
//   fn.apply(this, [testL, ...args])
//   console.timeEnd(fn.name)
// }

