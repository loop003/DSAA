// 堆结构
// 大顶堆
// 删除堆顶元素关键一步：反复向下对比+交换的过程
// function downHeap(low, high) {
//   let i = low, j = 2*i + 1

//   while(j<=high) {
//     if (heap[j+1] > high[j]) {
//       j = j+1
//     }
//     if (heap[i] < heap[j]) {
//       [heap[i], heap[j]] = [heap[j], heap[i]]
//       i = j
//       j = 2*i +1
//     } else {
//       break
//     }
//   }
// }

// 往堆里追加一个元素
// 反复向上对比+交换
// function upHeap(low, high) {
//   let i = high, j = Math.floor((i-1)/2)

//   while(j>=low) {
//     if (heap[i] > heap[j]) {
//       [heap[i], heap[j]] = [heap[j], heap[i]]
//       i = j
//       j = Math.floor((i-1)/2)
//     } else {
//       break
//     }
//   }
// }
//：“删除”就是“向下比较+交换”，而“添加”则是“向上比较+交换”。

//堆结构在排序中的应用——优先队列
// 题目描述：在未排序的数组中找到第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素
// 小顶堆

function findKthlargedt(nums, k) {
  const heap = []
  let i = 0, hN = k
  const len = nums.length
  while(hN) {
    insert(i++)
    hN--
  }
  while(i < len) {
    if (heap[0] < nums[i]) {
      heap[0] = nums[i]
      downHeap(0, k-1)
    }
    i++
  }

  return heap[0]

  function insert(n) {
    heap[n] = nums[n]
    upHeap(0, n)
  }

  function upHeap(low, high) {
    let i = high, j = Math.floor((i-1)/2)

    while(j >= low) {
      if(heap[i] < heap[j]) {
        [heap[i], heap[j]] = [heap[j], heap[i]]
        i = j
        j = Math.floor((i-1)/2)
      } else {
        break
      }
    }
  }

  function downHeap(low, high) {
    let i = low, j = 2*i + 1

    while(j <= high) {
      if (heap[j+1] < heap[j]) {
        j = j+1
      }
      if (heap[j] < heap[i]) {
        [heap[i], heap[j]] = [heap[j], heap[i]]
        i = j
        j = 2*i + 1
      } else {
        break
      }
    }
  }
}

// test
const nums = [3,2,3,1,2,4,5,5,6], k = 3
console.log(findKthlargedt(nums,k))
