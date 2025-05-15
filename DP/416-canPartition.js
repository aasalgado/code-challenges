function canPartition(nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  // If the total sum is odd, we cannot partition it into two equal subsets
  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true; // Sum of 0 is always possible (by choosing no items)

  for (let num of nums) {
    // Traverse backwards to avoid overwriting results from the same round
    for (let w = target; w >= num; w--) {
      dp[w] = dp[w] || dp[w - num];
    }
  }

  return dp[target]; // If dp[target] is true, it means the subset sum exists
}

console.log(canPartition([1, 5, 11, 5]));

// Time Complexity:
// O(n * target) where:
// n is the number of items in the array (nums).
// target is half of the total sum of the array (totalSum / 2).
// For each item in the array, we iterate through the DP array of size target (from target down to the current item's value). Hence, the time complexity is O(n * target).

// Space Complexity:
// O(target) where target = totalSum / 2. We only need a 1D DP array of size target + 1 to track which subset sums are achievable.

// Explanation:
// The problem is asking if we can partition the given array into two subsets where the sum of elements in both subsets is equal.

// Total Sum Check:

// The first step is to calculate the total sum of the array. If this total sum is odd, it's impossible to split it into two equal subsets, so we immediately return false.

// Subset Sum Problem:

// If the total sum is even, we define a target sum as totalSum / 2. We then aim to find whether there exists a subset of the array that sums up to this target value.

// Dynamic Programming (DP) Approach:

// We use a 1D DP array dp[] where dp[w] indicates whether it's possible to form a subset with sum w from the elements we've processed so far.

// We initialize dp[0] = true because we can always form sum 0 by selecting no items.

// DP Array Update:

// For each number num in the array, we update the DP array backwards from target down to num. This is done to ensure that we don’t reuse the current item in the same iteration.

// If we can form a sum w either by including or excluding the current item, we update dp[w].

// Final Check:

// After processing all the items, if dp[target] = true, we return true, meaning we can partition the array into two subsets with equal sum. If dp[target] = false, it means no such partition is possible, and we return false.
