var characterReplacement = function (s, k) {
  let left = 0;
  let maxCount = 0;
  let maxLength = 0;
  let map = new Map();

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char)); // Get the count of the most frequent character in the window

    // If the window size minus the count of the most frequent character is greater than k, shrink the window
    if (right - left + 1 - maxCount > k) {
      map.set(s[left], map.get(s[left]) - 1); // Remove the character at the left pointer from the map
      left++; // Move the left pointer to shrink the window
    }

    // Update the max length of the substring
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
