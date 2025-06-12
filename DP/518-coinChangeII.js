function change(amount, coins) {
  // Initialize dp array with size (amount + 1), set all elements to 0
  let dp = new Array(amount + 1).fill(0);

  // There is one way to make amount 0: using no coins
  dp[0] = 1;

  // Iterate over all coin denominations
  for (let coin of coins) {
    // For each coin, update dp for all amounts that can be made
    // starting from the coin value up to the target amount
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  // The result is stored in dp[amount], representing the number of ways to make up the amount
  return dp[amount];
}

// knapsack pattern

// Time Complexity:
// O(n * amount): We iterate over each coin (n coins), and for each coin, we iterate over all amounts from the coin value up to amount. Therefore, the time complexity is O(n * amount), where:

// n is the number of coins.

// amount is the target amount.

// Space Complexity:
// O(amount): We use a 1D array dp of size amount + 1 to store the number of ways to make each amount. Therefore, the space complexity is O(amount).
