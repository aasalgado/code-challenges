function maxProfit(prices) {
  const n = prices.length;
  if (n === 0) return 0;

  let dp = Array(3)
    .fill()
    .map(() => Array(n).fill(0));

  for (let k = 1; k <= 2; k++) {
    let maxDiff = -prices[0];
    for (let i = 1; i < n; i++) {
      dp[k][i] = Math.max(dp[k][i - 1], prices[i] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[k - 1][i] - prices[i]);
    }
  }

  return dp[2][n - 1];
}

// prices = [3, 2, 6, 5, 0, 3]

// The problem asks us to find the maximum profit achievable from at most two stock transactions. To solve this, we use dynamic programming to track the maximum profit for each day with a specific number of transactions (1 or 2). We create a 2D array dp[k][i], where k represents the number of transactions (0, 1, or 2) and i represents the day. Each cell in the table stores the maximum profit achievable by the end of day i with k transactions. We also use a helper variable maxDiff to track the best buying opportunity before each day, allowing us to efficiently compute the maximum profit for selling on each day.
// The algorithm iterates over each day and calculates the maximum profit by either doing nothing or selling the stock on that day, considering the best buying price from previous days. The final result is stored in dp[2][n-1], which gives the maximum profit achievable with at most two transactions by the last day. The time complexity of this solution is O(n), where n is the number of days, because we iterate through the days twice (once for each transaction), and space complexity is O(n) due to the storage required for the DP table.
