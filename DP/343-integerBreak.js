function integerBreak(n) {
  // Initialize dp array
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1; // Base case: there's no valid integer break for 1

  // Build the dp table
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }

  return dp[n];
}

// Time Complexity: O(n²)

// Space Complexity: O(n)
