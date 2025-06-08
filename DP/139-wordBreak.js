function wordBreak(s, wordDict) {
  let n = s.length;
  let dp = Array(n + 1).fill(false);
  dp[0] = true; // Base case: empty string can always be segmented

  // Iterate over the length of the string
  for (let i = 1; i <= n; i++) {
    // Check all possible substrings ending at position i
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        break; // No need to check further if we already found a valid split
      }
    }
  }

  // The final answer is whether the whole string can be segmented
  return dp[n];
}

// Time Complexity:
// The time complexity is O(n²) because for each i (which runs from 1 to n), we check all possible j values (from 0 to i-1).

// Space Complexity:
// The space complexity is O(n) because we store the DP array of size n + 1 (for substrings of s).

// Pattern: This problem fits into the Subset Sum / Segmentation DP pattern, where we segment a string into valid words.

// Optimal Substructure: The solution to the problem can be constructed from smaller subproblems, where each subproblem involves checking whether a smaller substring can be segmented into valid words.

// Overlapping Subproblems: The same subproblems (substrings) are solved multiple times, and we use a DP table to store results and avoid redundant calculations.
