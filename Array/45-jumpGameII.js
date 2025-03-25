var jump = function (nums) {
  let jumps = 0; // To store the number of jumps
  let currentEnd = 0; // The end of the current range
  let farthest = 0; // The farthest point we can reach in the next jump

  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest point that can be reached from index i
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of the current jump range, increment the jump count
    if (i === currentEnd) {
      jumps++; // We're making a jump
      currentEnd = farthest; // Update the end of the current jump range

      // If the current end reaches or exceeds the last index, we're done
      if (currentEnd >= nums.length - 1) break;
    }
  }

  return jumps;
};

// Explanation:
// 1. Variables:
// jumps: This counts how many jumps we have made to reach the last index.
// currentEnd: This keeps track of the farthest index we can reach with the current jump.
// farthest: This stores the farthest point we can reach after considering the current position.

// 2. Iteration:
// We iterate over the array until we reach the second-to-last element (i < nums.length - 1).
// At each index i, we update farthest to be the maximum of the current farthest and i + nums[i] (the farthest position we can reach from i).
// If we have reached the end of the current jump (i === currentEnd), we increment the jump count (jumps++), and we update currentEnd to farthest (i.e., we extend the range for the next jump).
// If currentEnd reaches or exceeds the last index, we break out of the loop because we can reach the end with the current number of jumps.

// 3. Return:
// After iterating through the array, we return the number of jumps required to reach the last index.

// Time Complexity:
// O(n): We iterate through the array once, where n is the length of the array. The operations inside the loop are constant time operations.

// Space Complexity:
// O(1): We use a constant amount of space to track jumps, currentEnd, and farthest.
