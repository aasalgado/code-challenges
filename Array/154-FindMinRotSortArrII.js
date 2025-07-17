function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      // nums[mid] === nums[right], we can't tell which side is sorted
      right--; // safely shrink the window
    }
  }

  return nums[left];
}

// Best/Average	O(log n)
// Worst	O(n) When many duplicates cause slow right-- progress
// Space	O(1)
