function medianOfarrs(nums1, nums2) {
  let len_1 = nums1.length 
  let len_2 = nums2.length

  // 确保切割数组是最长数组
  if (len_2 > len_1) {
    // 注意分号
    // [nums1, nums2] = [nums2, nums1]
    // ;[len_1, len_2] = [len_2, len_1] 
    return medianOfarrs(nums2, nums1)
  }
  let L1 = Math.floor(len_1/2) - 1, R1, L2, R2

  while (0 <= L1 <=len_1) {
    R1 = L1 + 1
    L2 = Math.floor((len_1+len_2)/2) - (L1 + 1) -1
    R2 = L2 + 1   
    if (nums1[L1] > nums2[R2]) {
      L1 = Math.floor(L1/2)
    } else if (nums1[R1] < nums2[L2]) { 
      L1 = Math.floor((R1+len_1-1)/2)
    } else {
      break
    }
  }

  if ((len_1 + len_2)%2 === 0) return (Math.max(nums1[L1], nums2[L2]) + Math.min(nums1[R1], nums2[R2]))/2
  return Math.min(nums2[R2], nums1[R1])
}

const nums1 = [5, 6, 7], nums2 = [1, 2, 4, 12]

console.log(medianOfarrs(nums1, nums2))

