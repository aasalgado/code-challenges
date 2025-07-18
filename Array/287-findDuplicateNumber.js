// LeetCode 287: Find the Duplicate Number
function findDuplicate(nums) {
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // Count how many numbers are ≤ mid
    let count = 0;
    for (const num of nums) {
      if (num <= mid) count++;
    }

    if (count > mid) {
      right = mid; // duplicate is in [left, mid]
    } else {
      left = mid + 1; // duplicate is in [mid + 1, right]
    }
  }

  return left;
}

// Time	O(n log n)
// Space   O(1)
