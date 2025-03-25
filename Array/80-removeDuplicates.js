var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let j = 2; // Initialize pointer for the next valid element position

  // Iterate through the array starting from index 2
  for (let i = 2; i < nums.length; i++) {
    // If the current element is not a duplicate or appears less than twice
    if (nums[i] !== nums[j - 2]) {
      nums[j] = nums[i]; // Move the valid element to position j
      j++; // Increment j
    }
  }

  return j; // Return the new length
};

// Explanation:
// 1. Base Case:
// If the length of nums is less than or equal to 2, there is no need to remove any duplicates, so the function just returns the length of the array.

// 2. Pointer Initialization:
// We start the pointer j at index 2 because the first two elements can always appear (even if they are the same).
// We begin iterating with i = 2 (the third element in the array).

// 3. Iteration:
// For each i starting from 2, we check if the current element nums[i] is equal to nums[j - 2]. This checks if the current element is the same as the element two positions before j, ensuring that no element appears more than twice.
// If the element is not a duplicate or appears less than twice, we assign nums[i] to nums[j] and increment j.

// 4. Result:
// The pointer j will point to the position just after the last valid element in the modified array, which is the new length of the array with valid elements.

// Time Complexity:
// O(n), where n is the length of the array. We go through the array once, so the time complexity is linear.

// Space Complexity:
// O(1): We are modifying the input array in place, using only a constant amount of extra space.
