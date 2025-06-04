function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = new Array(n);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}

// the top floor is after the array n + 1

// time complexity => O(n)
// space complexity => O(n)

function minCostClimbingStairs(cost) {
  let prev2 = 0,
    prev1 = cost[0]; // Base cases for the first two steps

  for (let i = 1; i < cost.length; i++) {
    let current = Math.min(prev1, prev2) + cost[i];
    prev2 = prev1;
    prev1 = current;
  }

  return Math.min(prev1, prev2);
}

// time complexity => O(n)
// space complexity => O(1)

// this works also
var minCostClimbingStairs = function (cost) {
  let prev2 = cost[0],
    prev1 = cost[1]; // Base cases for the first two steps

  for (let i = 2; i < cost.length; i++) {
    let current = Math.min(prev1, prev2) + cost[i];
    prev2 = prev1;
    prev1 = current;
  }

  return Math.min(prev1, prev2);
};

// another way of writing the same thing
var minCostClimbingStairs = function (cost) {
  let one = 0,
    two = 0;
  for (let i = 2; i <= cost.length; i++) {
    [one, two] = [
      one + cost[i - 1] < two + cost[i - 2]
        ? one + cost[i - 1]
        : two + cost[i - 2],
      one,
    ];
  }
  return one;
};
