function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  // DP table to store the minimum path sum to each cell
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // Initialize the starting point
  dp[0][0] = grid[0][0];

  // Initialize the first row (can only come from the left)
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Initialize the first column (can only come from above)
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // Fill the rest of the dp table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  // The minimum path sum will be at the bottom-right corner
  return dp[m - 1][n - 1];
}

// Time and Space Complexity:
// Time Complexity:
// O(n * m) where n is the number of rows and m is the number of columns. We iterate through all cells in the DP table exactly once.

// Space Complexity:
// O(n * m) as we use a 2D DP array to store the minimum path sum for each cell.
