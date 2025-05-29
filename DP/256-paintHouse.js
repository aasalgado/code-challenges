function minCost(costs) {
  const n = costs.length;
  if (n === 0) return 0;

  // Initialize the first house cost
  let dp = [costs[0][0], costs[0][1], costs[0][2]];

  for (let i = 1; i < n; i++) {
    // Calculate the new cost for each color for the current house
    let newRed = Math.min(dp[1], dp[2]) + costs[i][0];
    let newGreen = Math.min(dp[0], dp[2]) + costs[i][1];
    let newBlue = Math.min(dp[0], dp[1]) + costs[i][2];

    // Update dp for the next iteration
    dp[0] = newRed;
    dp[1] = newGreen;
    dp[2] = newBlue;
  }

  // The answer is the minimum of the costs for the last house
  return Math.min(dp[0], dp[1], dp[2]);
}

// time complexity => O(n)
// space complexity => O(1)

console.log(minCost([[7, 6, 2]]));
