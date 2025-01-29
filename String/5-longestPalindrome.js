var longestPalindrome = function (s) {
  if (s.length <= 1) return s; // If the string length is 1 or less, it is already a palindrome.

  let start = 0,
    maxLength = 1;

  // Helper function to expand around center
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (single character center)
    let len1 = expandAroundCenter(i, i);
    // Check for even-length palindromes (center between two characters)
    let len2 = expandAroundCenter(i, i + 1);

    // Take the maximum length from both
    let len = Math.max(len1, len2);

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2); // Update the starting index of the palindrome
    }
  }

  return s.slice(start, start + maxLength);
};

// n^2 time complexity
// expand-around-center technique
