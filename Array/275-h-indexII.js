// LeetCode 275: H-Index II
function hIndex(citations) {
  const n = citations.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const h_candidate = n - mid;

    if (citations[mid] >= h_candidate) {
      // This h_candidate might work, try to find a larger one
      right = mid - 1;
    } else {
      // h_candidate is too large, try smaller h
      left = mid + 1;
    }
  }

  // Final h-index is based on how many papers are to the right of 'left'
  return n - left;
}

// time O(log n)
// space O(1)
