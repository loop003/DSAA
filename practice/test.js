
const len = 100000


console.time('a')
const dp1 = Array.from({length: len}, () => 0)
console.timeEnd('a')

console.time('i')
const dp = new Array(len).fill(0)
console.timeEnd('i')