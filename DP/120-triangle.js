function minimumTotal(triangle) {
  // Start from the second-to-last row and move upwards
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // Update the current element with the minimum path sum
      triangle[row][col] += Math.min(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      );
    }
  }

  // The top element now contains the minimum path sum
  return triangle[0][0];
}

// Time Complexity: O(n), where n is the number of rows in the triangle. We process each element in the triangle once.

// Space Complexity: O(1), since we're modifying the triangle in place and not using any additional space.
