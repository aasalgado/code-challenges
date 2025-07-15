function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0,
    right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = matrix[Math.floor(mid / cols)][mid % cols];

    if (midVal === target) return true;
    else if (midVal < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}

// Time: O(log (m * n)) – standard binary search

// Space: O(1) – no extra space
