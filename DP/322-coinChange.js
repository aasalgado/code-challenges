function coinChange(coins, amount) {
  // Initialize dp array with a large value
  let dp = Array(amount + 1).fill(amount + 1); // amount + 1 acts as infinity
  dp[0] = 0; // Base case: no coins needed to make amount 0

  // Iterate through each coin
  for (let coin of coins) {
    // For each amount from coin to the total amount
    for (let i = coin; i <= amount; i++) {
      // Update dp[i] by taking the minimum number of coins
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  // If dp[amount] is still amount + 1, it means we can't form the amount
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// time complexity => O(n * amount)
// space complexity => O(amount)
