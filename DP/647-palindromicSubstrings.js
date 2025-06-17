function countSubstrings(s) {
  let count = 0;

  // Helper function to count palindromes by expanding around the center
  function expandAroundCenter(left, right) {
    let localCount = 0;
    // Expand while the characters are the same
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      localCount++;
      left--;
      right++;
    }
    return localCount;
  }

  // Iterate over every character (for odd-length palindromes)
  for (let i = 0; i < s.length; i++) {
    // Odd-length palindromes (centered at a single character)
    count += expandAroundCenter(i, i);
    // Even-length palindromes (centered between two characters)
    count += expandAroundCenter(i, i + 1);
  }

  return count;
}

// Expand Around Center

// Time Complexity: O(n²) due to the double iteration (once for each character and once for each expansion).
// Space Complexity: O(1) because we only use a constant amount of extra space.
// The Expand Around Center approach is a time-efficient and space-efficient way to solve this problem compared to other potential approaches like Dynamic Programming (DP), especially for large inputs.
