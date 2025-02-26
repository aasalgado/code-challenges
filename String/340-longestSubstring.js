var longestSubstring = function (s, k) {
  let left = 0;
  let maxLength = 0;
  let map = new Map();

  for (let right = 0; right < s.length; right++) {
    // Add the character at `right` to the map
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    // If there are more than `k` distinct characters, shrink the window from the left
    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }

    // Update maxLength after adjusting the window
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// s = "eceba", k = 2

// return 3
