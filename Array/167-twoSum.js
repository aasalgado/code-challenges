var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; // Return 1-indexed positions
    } else if (sum < target) {
      left++; // Move the left pointer to the right to increase the sum
    } else {
      right--; // Move the right pointer to the left to decrease the sum
    }
  }
};

// O (n)
// O (1)
