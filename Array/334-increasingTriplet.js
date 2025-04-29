var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num; // Update the smallest number (first)
    } else if (num <= second) {
      second = num; // Update the second smallest number (second)
    } else {
      // If we find a number greater than `second`, we have found our triplet
      return true;
    }
  }

  return false; // No triplet found
};

// Time Complexity:
// O(n): We only loop through the array once. Each iteration involves constant-time checks and updates, so the time complexity is O(n), where n is the length of the array.

// Space Complexity:
// O(1): We only use two variables (first and second), so the space complexity is constant.
