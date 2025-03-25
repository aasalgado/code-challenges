var minFlips = function (s) {
  const n = s.length;
  // Concatenate the string to itself to simulate all possible rotations
  s += s;

  let minFlips = Infinity;

  // Check both alternating patterns
  for (let i = 0; i < n; i++) {
    let flipsPattern1 = 0,
      flipsPattern2 = 0;

    // Check the substring s[i...i+n-1] for both patterns
    for (let j = i; j < i + n; j++) {
      // Pattern 1: Alternates starting with '0'
      if (s[j] !== (j % 2 === 0 ? "0" : "1")) flipsPattern1++;

      // Pattern 2: Alternates starting with '1'
      if (s[j] !== (j % 2 === 0 ? "1" : "0")) flipsPattern2++;
    }

    // Update the minimum flips required
    minFlips = Math.min(minFlips, flipsPattern1, flipsPattern2);
  }

  return minFlips;
};

// time => O(n^2) space => O(1)

// Explanation:
// 1. String Rotation:
// We concatenate the string s to itself, s += s. This allows us to easily simulate all rotations without manually rotating the string in each iteration.
// After concatenation, the string effectively contains every possible rotation of the original string.

// 2. Two Possible Alternating Patterns:
// We check two patterns: one starting with '0' and the other starting with '1'.

// 3. Sliding Window Check:
// We use a sliding window of size n (the original string length) to check each substring in the concatenated string.
// For each substring, we count how many characters need to be flipped to match either of the alternating patterns.

// 4. Result:
// The minimum flips required is the smallest count of flips for all the substrings.
