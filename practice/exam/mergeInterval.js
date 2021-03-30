// 给出一个区间的集合，请合并所有重叠的区间。

function mergeInterval(intervals) {
  const len = intervals.length 
  if (!len) return []

  const res = []
  // 按头区间排序
  intervals = intervals.sort((a,b) => a[0]-b[0])
  res.push(intervals[0])
  for (let i=0; i < len; i++) {
    const cur = res[res.length-1]
    if (cur[1] > intervals[i][0]) {
      cur[1] = Math.max(cur[1], intervals[i][1])
    } else {
      res.push( intervals[i])
    }
  }
  return res
}

const i = [[1,3],[2,6],[8,10],[15,18]] 
console.log(mergeInterval(i))