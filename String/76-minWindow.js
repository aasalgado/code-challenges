var minWindow = function (s, t) {
  let mapT = new Map();
  let mapS = new Map();
  let required = t.length;
  let left = 0;
  let minLength = Infinity;
  let minSubstring = "";

  // Create frequency map for t
  for (let char of t) {
    mapT.set(char, (mapT.get(char) || 0) + 1);
  }

  // Traverse the string s
  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];
    mapS.set(currentChar, (mapS.get(currentChar) || 0) + 1);

    // If this character is needed (present in t), decrease the required count
    if (mapS.get(currentChar) <= mapT.get(currentChar)) {
      required--;
    }

    // When all characters are matched, try to minimize the window
    while (required === 0) {
      let windowLength = right - left + 1;
      if (windowLength < minLength) {
        minLength = windowLength;
        minSubstring = s.slice(left, right + 1);
      }

      // Move left pointer to shrink the window
      let leftChar = s[left];
      mapS.set(leftChar, mapS.get(leftChar) - 1);
      if (mapS.get(leftChar) < mapT.get(leftChar)) {
        required++;
      }
      left++;
    }
  }

  return minSubstring;
};
