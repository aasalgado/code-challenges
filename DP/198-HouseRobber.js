var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // Initialize base cases
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // Fill the dp array with the recurrence relation
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[nums.length - 1];
};

//   Time Complexity:
// O(n): We only loop through the nums array once to fill the dp array, so the time complexity is O(n), where n is the length of the nums array.

// Space Complexity:
// O(n): We use an additional dp array to store the intermediate results. Therefore, the space complexity is O(n).

var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let current = Math.max(prev1, nums[i] + prev2);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

// Space Optimization:
// We can optimize the space complexity to O(1) by noticing that we only need the previous two values (dp[i-1] and dp[i-2]) to compute dp[i]. Instead of maintaining an entire dp array, we can just keep two variables to store these values.
