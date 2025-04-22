// 0/1 Knapsack Problem:
// Problem Statement:
// You are given a set of n items, each with a weight and a value, and a knapsack with a maximum weight capacity W. Your goal is to determine the maximum value that you can carry in the knapsack, such that the total weight of the selected items does not exceed the capacity W. Each item can either be included or excluded from the knapsack (hence the name "0/1").

// Input:
// An integer n representing the number of items.

// An integer W representing the maximum weight capacity of the knapsack.

// An array weights[] of size n where weights[i] is the weight of the i-th item.

// An array values[] of size n where values[i] is the value of the i-th item.

// Output:
// Return the maximum value that can be carried in the knapsack without exceeding the weight capacity W.

// Constraints:
// 1 ≤ n ≤ 100
// 1 ≤ W ≤ 1000
// 1 ≤ weights[i], values[i] ≤ 1000

// Tabulation (Bottom-Up)
function knapsackTabulation(weights, values, W) {
  const n = weights.length; // Number of items
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0)); // DP table

  // Fill the DP table iteratively
  for (let i = 1; i <= n; i++) {
    // Iterate over items
    for (let w = 1; w <= W; w++) {
      // Iterate over weight capacities
      // If the current item can be included in the knapsack
      if (weights[i - 1] <= w) {
        // We have two choices:
        // 1. Exclude the item: dp[i-1][w]
        // 2. Include the item: dp[i-1][w - weights[i-1]] + values[i-1]
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        // If the item can't be included, take the value from the row above
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W]; // The maximum value will be in the bottom-right corner
}

// Time-complexity: O(n * W)
// Space-complexity: O(n * W)

// Memoization (Top-Down approach)
function knapsackMemo(weights, values, W, n, memo = {}) {
  if (`{n},{W}` in memo) return memo[`{n},w}`];

  if (n === 0 || W === 0) return 0;

  if (weight[n - 1] > W) {
    return (memo[`{n},{W}`] = knapsackMemo(weights, values, W, n - 1, memo));
  } else {
    return (memo[`{n},{W}`] = Math.max(
      knapsackMemo(weights, values, W, n - 1, memo),
      knapsackMemo(weights, values, W - weight[n - 1], n - 1, memo) +
        values[n - 1]
    ));
  }
}

// Time-complexity: O(n * W)
// Space-complexity: O(n * W) + O(n) - you have to add O(n) because of the recursion stack
