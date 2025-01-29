var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the area between the two lines
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    // Move the pointer corresponding to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

// O(n)
