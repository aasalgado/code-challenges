// LeetCode 153: Find Minimum in Rotated Sorted Array
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // Minimum is in the right half
      left = mid + 1;
    } else {
      // Minimum is in the left half (including mid)
      right = mid;
    }
  }

  // left === right → found the minimum
  return nums[left];
}

// Time	O(log n)
// Space	O(1)
