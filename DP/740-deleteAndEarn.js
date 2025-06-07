function deleteAndEarn(nums) {
  if (nums.length === 0) return 0;

  // Step 1: Count frequencies of each number
  let maxNum = Math.max(...nums);
  let count = Array(maxNum + 1).fill(0);

  for (let num of nums) {
    count[num]++;
  }

  // Step 2: DP Array initialization
  let dp = Array(maxNum + 1).fill(0);

  dp[1] = count[1]; // Base case: earn points by deleting 1

  // Step 3: DP recurrence
  for (let i = 2; i <= maxNum; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + count[i] * i);
  }

  // Final answer: the maximum points we can earn
  return dp[maxNum];
}

// Optimal Substructure
// The idea is that the solution for i depends on the results of previous subproblems (i-1 and i-2), which is a classic optimal substructure property. We are solving overlapping subproblems by considering both choices (skip or delete) and combining the results efficiently.

// Time Complexity:
// O(n + m) where n is the length of the nums array and m is the maximum number in nums.

// O(n) for counting the frequencies.

// O(m) for filling the DP table.

// Space Complexity:
// O(m) because the dp array and the count array are both of size m + 1. m representing the largest number in nums
