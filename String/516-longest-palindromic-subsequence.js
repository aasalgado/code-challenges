var longestPalindromeSubseq = function (s) {
  let n = s.length;
  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  // Base case: every single character is a palindrome of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // Fill the DP table
  for (let len = 2; len <= n; len++) {
    for (let left = 0; left <= n - len; left++) {
      let right = left + len - 1;
      if (s[left] === s[right]) {
        dp[left][right] = dp[left + 1][right - 1] + 2; // Characters match, expand the palindrome
      } else {
        dp[left][right] = Math.max(dp[left + 1][right], dp[left][right - 1]); // No match, take max of excluding one character
      }
    }
  }

  // The result is the length of the longest palindromic subsequence
  return dp[0][n - 1];
};
