function longestSubarray(nums) {
  let left = 0; // Start of the sliding window
  let zeroCount = 0; // Count of zeros in the current window
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    // If the current element is 0, increase the zero count
    if (nums[right] === 0) {
      zeroCount++;
    }

    // If we have more than one zero, shrink the window from the left
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Calculate the length of the current window, excluding one element
    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
}
