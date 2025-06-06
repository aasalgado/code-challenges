// Hard
function maxCoins(nums) {
  const n = nums.length;

  // Add 1 at the beginning and the end of the array for boundary conditions
  nums = [1, ...nums, 1];

  // DP table to store the maximum coins collected for subarrays [i, j]
  let dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

  // Iterate over subarrays with increasing length
  for (let length = 1; length <= n; length++) {
    for (let i = 1; i <= n - length + 1; i++) {
      let j = i + length - 1;
      // Try bursting all the balloons between i and j, and choose the one that maximizes the coins
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + dp[k + 1][j] + nums[i - 1] * nums[k] * nums[j + 1]
        );
      }
    }
  }

  // The final answer will be in dp[1][n] which represents the entire array
  return dp[1][n];
}

// Optimal Substructure, Overlapping Subproblems, Interval DP

// time complexity => O(n^3)
// space complexity => O(n^2)

console.log(maxCoins([3, 1, 5, 8]));

// The Burst Balloons problem can be solved using dynamic programming (DP) to maximize the number of coins collected by bursting all the balloons optimally. The idea is to break down the problem into smaller subproblems by considering all possible subarrays of balloons. We use a DP table dp[i][j], where each cell represents the maximum coins we can collect from bursting all the balloons between indices i and j (exclusive of boundaries). By considering each possible balloon k to burst last in the subarray [i, j], the number of coins collected is the sum of the coins from the left and right subarrays plus the coins from bursting balloon k. This allows us to compute the maximum coins for every subarray progressively.

// We iterate over subarrays of increasing lengths, starting from length 1 up to the entire array. For each subarray, we evaluate every possible balloon to burst last and update the DP table accordingly. The final result is stored in dp[1][n], which holds the maximum coins we can collect by bursting all balloons optimally, considering the padded boundary values. This approach ensures that we explore every possible combination of subarrays efficiently, resulting in an optimal solution. The time complexity is O(n³) due to the three nested loops, and the space complexity is O(n²) due to the DP table storing results for all subarrays.
