var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Decide whether to add the current number to the existing subarray or start a new subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Track the maximum sum encountered so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// O(n)
