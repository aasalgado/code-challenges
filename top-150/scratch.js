var lengthOfLongestSubstring = function (s) {
  let map = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (map.has(s[right])) {
      map.delete(s[left]);
      left++;
    }
    map.add(s[right]);
    maxLength = Math.max(max, right - left + 1);
  }
  return maxLength;
};

// s = "abcabcbb"
