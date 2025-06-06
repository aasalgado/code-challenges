function numSquares(n) {
  // Initialize dp array where dp[i] is the minimum number of perfect squares that sum to i
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 perfect squares needed to sum to 0

  // Iterate over each number from 1 to n
  for (let i = 1; i <= n; i++) {
    // Try each perfect square less than or equal to i
    for (let j = 1; j * j <= i; j++) {
      // + 1 represents the current perfect square j * j that were considering adding
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  // Return the minimum number of perfect squares that sum to n
  return dp[n];
}

// this follows the Knapsack DP pattern

// time complexity => O(n * √n)
// space complexity => O(n)
