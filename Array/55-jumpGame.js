var canJump = function (nums) {
  let farthest = 0; // The farthest index we can reach
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > farthest) {
      return false; // If the current index is greater than the farthest we can reach, return false
    }

    farthest = Math.max(farthest, i + nums[i]); // Update the farthest index we can reach

    if (farthest >= n - 1) {
      return true; // If we can reach or exceed the last index, return true
    }
  }

  return false; // If we can't reach the last index, return false
};

// greedy algorithm
// Explanation of the Code:
// 1. Initialization:
// We initialize farthest = 0 because initially, the farthest we can reach is index 0.

// 2. Iteration:
// We iterate over the array from the first element to the last element:
// If i > farthest, it means we can't reach index i and hence cannot proceed further, so we return false.
// We update the farthest index with the maximum of the current farthest and i + nums[i] (which represents how far we can reach from index i).
// If at any point farthest is greater than or equal to n - 1, we can reach the last index, and we return true.

// 3. Final Check:
// If the loop completes without being able to reach the last index, we return false.

// Time Complexity:
// O(n): We iterate through the array once, and for each index, we only perform constant-time operations (comparison and updating farthest).

// Space Complexity:
// O(1): We only use a constant amount of extra space (for farthest and i), so the space complexity is constant.
