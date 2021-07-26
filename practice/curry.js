const add = a => b => c => d => a + b + c + d

console.log(add(1)(6)(3)(5))

// 支持无限层级，且每次可传多个参数

function add(...args) {
  const sum1 = args.reduce((acc, cur) => acc + cur)
  function f(...fArgs){
    const sum2 = fArgs.reduce((acc, cur) => acc + cur, sum1)
    return add(sum2)
  }

  f.toString = () => {
    return sum1
  }
  return f
}