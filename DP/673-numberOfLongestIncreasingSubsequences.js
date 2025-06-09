function findNumberOfLIS(nums) {
  if (nums.length === 0) return 0;

  let n = nums.length;
  let dp = new Array(n).fill(1); // dp[i] stores the length of LIS ending at index i
  let count = new Array(n).fill(1); // count[i] stores the number of LIS ending at index i

  let maxLength = 1; // Max length of increasing subsequence

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1; // update length
          count[i] = count[j]; // reset count
        } else if (dp[i] === dp[j] + 1) {
          count[i] += count[j]; // increment count of LIS
        }
      }
    }
    maxLength = Math.max(maxLength, dp[i]); // track the maximum length
  }

  // Sum the counts of all LIS of maxLength
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] === maxLength) {
      result += count[i];
    }
  }
  return result;
}

// notes
// The inner loop checks all previous elements nums[j] (where j < i). If nums[i] > nums[j], we update dp[i] and count[i] as follows:
// If dp[i] < dp[j] + 1, it means we've found a longer subsequence ending at i, so we update dp[i] and reset count[i] to count[j].
// If dp[i] === dp[j] + 1, it means we've found another subsequence of the same length as the longest at i, so we add count[j] to count[i].

// Summary
// The solution to LeetCode Problem 673: Number of Longest Increasing Subsequence uses Dynamic Programming (DP) to determine the number of longest increasing subsequences (LIS) in an array.
// The approach involves creating two arrays, dp and count. The dp[i] array keeps track of the length of the longest increasing subsequence that ends at index i, while the count[i] array tracks how many such subsequences exist.
// The solution iterates through the array, and for each element, it checks all previous elements to see if they can form an increasing subsequence with the current element.
// If they can, the length of the subsequence is updated, and the count of subsequences is adjusted accordingly. The final result is the sum of count[i] values for the longest subsequences.

// This problem follows the Optimal Substructure and Overlapping Subproblems patterns of Dynamic Programming.
// The problem exhibits optimal substructure because the solution to finding the longest increasing subsequence ending at any index relies on the solutions to previous indices.
// Overlapping subproblems occur as the same subproblems (subsequences) are considered multiple times, and thus, the solution uses memoization (via dp and count) to store intermediate results and avoid redundant work.
// The time complexity of the solution is O(n²) because of the two nested loops iterating over the array, while the space complexity is O(n) due to the dp and count arrays.
