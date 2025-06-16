function uniquePaths(m, n) {
  let dp = new Array(m).fill().map(() => Array(n).fill(1));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[m - 1][n - 1];
}

// Optimized version 1D
function uniquePaths(m, n) {
  let dp = new Array(n).fill(1);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
}

// Explanation of the Optimized Solution:
// Initialization: We initialize a 1D array dp of size n with all elements set to 1. This represents the first row of the grid.
// Iterating through the grid: For each row i from 1 to m-1, we update the dp array. For each column j from 1 to n-1, we update the value of dp[j] by adding the value of dp[j-1] (which represents the number of paths from the left) to the current value of dp[j] (which represents the number of paths from above).
// Result: After the loops complete, dp[n-1] contains the number of unique paths to reach the bottom-right corner of the grid.

// Time Complexity: O(m * n).
// In the 2D DP approach, we iterate through every cell of the grid once. In the optimized 1D DP approach, we still iterate over all cells, but we update the dp array in place, making the complexity the same.

// Space Complexity:
// O(m * n) for the 2D DP table.
// O(n) for the optimized 1D DP table. The optimized solution only requires a single array of size n, where n is the number of columns.

// Summary of DP Patterns:
// Optimal Substructure: The solution to each cell is built from the previous cells.
// Overlapping Subproblems: The same subproblems are solved multiple times, which is optimized by storing the results.
// Tabulation: The problem is solved in a bottom-up manner, filling up a table or array iteratively.
// Space Optimization: Instead of using a 2D DP table, the space is optimized by using a 1D array.
