const coinChange = (coins, amount) => {
  const res = Array.from({length: amount+1}, ()=>Infinity)
  res [0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const j of coins) {
      if (i-j >= 0) {
        res[i] = Math.min(res[i], res[i-j]+1)
      }
    }
  }

  return res[amount] !== Infinity ? res[amount] : -1
}

const coins = [1, 2, 5,11], amount = 11

console.log(coinChange(coins, amount))