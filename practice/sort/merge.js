function mergeSort(nums) {
  const n = nums.length
  if (n < 2){
    return nums
  }
  const mid = n >> 1
  const left = nums.slice(0, mid)
  const right = nums.slice(mid, n)
  return merge(mergeSort(left), mergeSort(right))

  function merge (L, R) {
    const result = []
    while (L.length && R.length) {
      if (L[0] <= R[0]) {
        result.push(L.shift())
      } else {
        result.push(R.shift())
      }
    }

    while (L.length) result.push(L.shift());
    while (R.length) result.push(R.shift());
    return result;
  }
}

module.exports = mergeSort