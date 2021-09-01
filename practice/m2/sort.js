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
// 共分割log(n)次（每轮算一次），每轮合并O(n), 共合并log(n)次
// 时间复杂度：log(n)*O(n) => O(nlogn)
function mergeSort(nums) {
  const len = nums.length
  if (len <= 1 ) return nums
  const mid = Math.floor(len/2)
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}

// 有序数组合并
function merge(nums1, nums2) {
  const res = []
  let i = 0, j = 0
  const len1 = nums1.length, len2 =nums2.length

  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i])
      i++
    } else {
      res.push(nums2[j])
      j++
    }
  }
  if (i < len1) {
    return res.concat(nums1.slice(i)) // concat返回新浅拷贝数组
  } else {
    return res.concat(nums2.slice(j))
  }
}


// 快速排序
// 左右指针分别指向数组的两端。接下来我们要做的，就是先移动左指针，
// 直到找到一个不小于基准值的值为止；然后再移动右指针，直到找到一个不大于基准值的值为止。
// 左右指针都停止时，左右值互换
// 最好：快速排序的时间复杂度分析思路和归并排序相似，最后结果也是 O(nlog(n))。
// 最坏：每次划分取到的都是当前数组中的最大值/最小值：O(n^2)
// 平均：O(nlog(n))
function quikSort(nums, left=0, right=nums.length-1) {
  if ((right-left) < 1) return nums
  let i = left, j = right
  const mid = Math.floor((i+j)/2)
  const pivot = nums[mid]
  // =保证pivot在左数组
  while ( i <= j) {
    while (nums[i] < pivot) {
      i++
    }
    // 右边等的时候也换，不然死循环
    while (nums[j] > pivot) {
      j--
    }
    // =交换防止死循环
    if (j >= i) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j--
      i++
    }
  }
  // 优化：长度为2时，不需要再操作
  if (left < i-1) {
    quikSort(nums, left, i-1)
  }
  if (i < right) {
    quikSort(nums, i, right)
  }
  return nums
}

// 测试

const a = [1,3,90,101,7,8,100,90]
// 1, 3, 90, 90, 7, 8, 100, 101
// 1, 3, 90, 90, 7, 8|, |100, 101
// 1, 3, 8, |90, 7|, 90   |100|, 101
// 1, 3, 8, 7|, |90, 90
// 1, 3, 7|, |8
quikSort(a)
console.log(quikSort(a))
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

