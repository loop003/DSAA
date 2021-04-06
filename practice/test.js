// 不加分号, 编译解析报错
let a = 1
let b = 2 // 相当于 let b = 2[a, b] = [b, a]
if (a) {
  [a, b] = [b, a]
}

console.log([a, b])

