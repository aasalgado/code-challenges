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

// Use binary search over the value range, not the array itself.
// At each step, count how many values are ≤ mid.
// If the count is too high, the duplicate is in the lower half.
// This avoids modifying the array and stays within O(1) space.

// Floyd’s Cycle (Another approach)
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Phase 1: detect cycle
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Phase 2: find the entrance to the cycle
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// Time	O(n)
// Space   O(1)
