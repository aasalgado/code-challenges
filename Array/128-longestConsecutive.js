var longestConsecutive = function (nums) {
  // Step 1: Create a set to store the unique elements
  const numSet = new Set(nums);
  let maxLength = 0;

  // Step 2: Iterate through the numbers
  for (let num of numSet) {
    // Step 3: Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Step 4: Count the length of the consecutive sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Step 5: Update the maximum length
      maxLength = Math.max(maxLength, currentStreak);
    }
  }

  return maxLength;
};
// Time Complexity:
// O(n):

// We iterate through each unique number in the set once, and for each number, we count its consecutive sequence in constant time (thanks to the set membership check being O(1)).

// The set operations (has(), add()) take O(1) time on average.

// So, the total time complexity is O(n), where n is the number of elements in the array.

// Space Complexity:
// O(n):

// We use a set to store all the numbers from the input array, so the space complexity is proportional to the number of elements in nums.
