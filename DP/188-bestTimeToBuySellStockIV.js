function maxProfit(k, prices) {
  const n = prices.length;

  // If no transactions are allowed or there are no prices, the profit is 0
  if (k === 0 || n === 0) return 0;

  // If k is greater than or equal to n / 2, we can make unlimited transactions
  if (k >= Math.floor(n / 2)) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }

  // DP table
  let dp = Array(k + 1)
    .fill()
    .map(() => Array(n).fill(0));

  for (let t = 1; t <= k; t++) {
    let maxDiff = -prices[0]; // Start with the first day's price for the best buy opportunity
    for (let i = 1; i < n; i++) {
      // max of doing nothing or selling on day i
      dp[t][i] = Math.max(dp[t][i - 1], prices[i] + maxDiff);
      // Update maxDiff to reflect the best possible buying price before day i
      maxDiff = Math.max(maxDiff, dp[t - 1][i] - prices[i]);
    }
  }

  return dp[k][n - 1]; // Maximum profit after k transactions on the last day
}

// Time Complexity: O(k * n), where k is the number of transactions and n is the number of days. We iterate through the days for each transaction, and the inner loop efficiently computes the best profit using maxDiff.

// Space Complexity: O(k * n) for the DP table.
