function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  // DP array where dp[i] represents the length of LIS ending at index i
  let dp = new Array(nums.length).fill(1); // Initialize with 1 as each number is a subsequence of length 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1); // Update dp[i] based on dp[j]
      }
    }
  }

  // The answer is the maximum value in the dp array
  return Math.max(...dp);
}

// time complexity O(n²)

// space complexity O(n)

// The solution to LeetCode Problem 300: Longest Increasing Subsequence uses Dynamic Programming (DP) to find the length of the longest increasing subsequence in a given array. The DP approach involves creating an array dp where dp[i] represents the length of the longest increasing subsequence that ends at index i. The algorithm iterates through the array, and for each element i, it checks all previous elements j (where j < i) to see if they form an increasing sequence with i. The recurrence relation is dp[i] = max(dp[i], dp[j] + 1) if nums[i] > nums[j]. Finally, the solution is the maximum value in the dp array, which holds the length of the longest increasing subsequence.
// The DP patterns used in this solution are Optimal Substructure and Overlapping Subproblems. The problem exhibits optimal substructure because the solution to the entire problem (the longest increasing subsequence) can be constructed from the solutions to smaller subproblems (subsequences ending at each index). Overlapping subproblems occur because the same subsequences are considered multiple times, and the DP table helps store intermediate results to avoid redundant calculations. The time complexity of the solution is O(n²) due to the two nested loops (one for iterating through each element and another for checking all previous elements), while the space complexity is O(n) due to the storage required for the dp array.
