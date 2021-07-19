var findMedianSortedArrays = function(nums1, nums2) {
  let n = nums1.length, m = nums2.length, i = len = n + m
  const res = Array.from({length: len}, ()=> 0)

  while(n>0 && m>0) {
      if (nums1[n-1] > nums2[m-1]) {
          res[i-1] = nums1[n-1]
          n--
      } else {
          res[i-1]  = nums2[m-1]
          m--
      }
      i--
  }
  if (n===0) {
    while (m>0) {
        res[i-1]  = nums2[m-1]
        i--
        m--
    }
  } else if(m===0) {
      while (n>0) {
          res[i-1]  = nums1[n-1]
          i--
          n--
      }
  }
  
  console.log(len)
  if (len%2 === 1) {
      return res[Math.floor(len/2)]
  }
  return (res[len/2]+res[Math.floor((len-1)/2)])/2
};

console.log(findMedianSortedArrays([2],[]))