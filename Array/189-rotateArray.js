var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k is greater than the length of the array
  if (k === 0) return;

  // Reverse the entire array
  reverse(nums, 0, n - 1);

  // Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Reverse the rest of the array
  reverse(nums, k, n - 1);
};

// Helper function to reverse elements in the array from index 'start' to 'end'
var reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};
