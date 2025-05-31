function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // Create a DP table with (m+1) rows and (n+1) columns, initialized to 0
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // If characters match, the LCS is 1 + the result of the previous subproblem
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Otherwise, take the maximum between excluding the character from either text1 or text2
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The bottom-right corner of the table contains the length of the LCS
  return dp[m][n];
}

// time complexity => O(m * n)
// space complexity => O(m * n)

// We can reduce the space complexity from O(m * n) to O(n) by only keeping track of
// the current and previous rows in the DP table (since each row only depends on the previous one).

function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  let prev = Array(n + 1).fill(0); // Previous row
  let curr = Array(n + 1).fill(0); // Current row

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev]; // Move current row to previous for next iteration
  }

  return prev[n];
}
