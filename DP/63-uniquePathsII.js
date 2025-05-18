function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // Edge case: If the starting point is blocked, return 0 immediately
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  // Create a DP table with the same size as the grid
  let dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  // If the starting cell is not blocked, set dp[0][0] = 1
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;

  // Fill the first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0];
  }

  // Fill the first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1];
  }

  // Fill the rest of the DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0; // Blocked cell, no path
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // Sum of paths from top and left
      }
    }
  }

  // The bottom-right corner will have the result
  return dp[m - 1][n - 1];
}

// Time Complexity:
// O(m * n): We iterate through the entire grid once, processing each cell.
// m is the number of rows.
// n is the number of columns.

// Space Complexity:
// O(m * n): We use a 2D DP array of size m x n to store the number of paths for each cell.
