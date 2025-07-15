function searchRange(nums, target) {
  // Helper function: Finds index of first or last occurrence
  function findIndex(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;
        // Keep searching in the left half if looking for first occurrence
        if (isFirst) {
          right = mid - 1;
        } else {
          // Keep searching in the right half for last occurrence
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  }

  // Handle edge case: empty array
  if (!nums || nums.length === 0) return [-1, -1];

  const first = findIndex(true);
  const last = findIndex(false);

  return [first, last];
}

// Uses two binary searches: one for the first index, one for the last.

// Time Complexity: O(log n)
