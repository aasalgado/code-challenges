function climbStairs(n) {
  if (n <= 1) return 1;

  // dp[i] will store the number of ways to reach the i-th step
  let dp = Array(n + 1).fill(0);

  dp[0] = 1; // There's one way to be on the ground (step 0)
  dp[1] = 1; // There's one way to reach the first step (1 step)

  // Fill the dp table for steps from 2 to n
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // You can come to step i from step i-1 or i-2
  }

  return dp[n]; // The answer will be the number of ways to reach step n
}

// State Representation:
// Let dp[i] represent the number of distinct ways to reach step i.

// Recurrence Relation:
// To get to step i, you could either:
// Take a 1-step from step i-1, or
// Take a 2-step from step i-2.

// Thus, the recurrence relation is:
// dp[i] = dp[i-1] + dp[i-2]

// Base Cases:
// dp[0] = 1: There's one way to be at the ground (by not climbing at all).
// dp[1] = 1: There’s only one way to reach the first step (by taking a 1-step).

// Time Complexity:
// O(n): We only need to iterate through the range from 0 to n once, filling the dp array.

// Space Complexity:
// O(n): We are using an array dp to store the number of ways for each step from 0 to n.
