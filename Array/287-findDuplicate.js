var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Step 1: Detect cycle using Floyd's Tortoise and Hare (Cycle Detection)
  do {
    slow = nums[slow]; // move slow pointer by 1 step
    fast = nums[nums[fast]]; // move fast pointer by 2 steps
  } while (slow !== fast);

  // Step 2: Find the entry point of the cycle (the duplicate number)
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// time complexity => O(n)
// space complexity => O(1)
