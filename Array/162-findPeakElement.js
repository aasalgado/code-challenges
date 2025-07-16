function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // We're in a descending slope → peak is on the left side (including mid)
      right = mid;
    } else {
      // Ascending slope → peak is on the right
      left = mid + 1;
    }
  }

  // left === right → this is the peak index
  return left;
}

// Time	O(log n)
// Space	O(1)
