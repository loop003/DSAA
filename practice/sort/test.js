const  { bubbleSort, bubbleSort1,bubbleSort2 } = require('./bubble')
const  mergeSort = require('./merge')
const  {quikSort, quikSort1} = require('./quikSort')

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}
const nums = randArray(10000, 0, 10000)

// show(bubbleSort)

// show(jsSort)
show(quikSort)
show(quikSort1)
show(bubbleSort1)
show(bubbleSort2)
show(mergeSort)

// 这种方式有点问题？
function show (fn) {
  console.time(fn.name)
  fn([...nums])
  // console.log(nums)
  console.timeEnd(fn.name)
}

function jsSort (nums) {
  return nums.sort((a,b) => a-b)
}