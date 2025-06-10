function longestStrChain(words) {
  // Sort words by length
  words.sort((a, b) => a.length - b.length);

  // Create a map to store the longest chain length for each word
  let dp = new Map();
  let longestChain = 1;

  for (let word of words) {
    dp.set(word, 1); // Initialize each word with chain length 1

    // Check all possible predecessors (remove one character from the word)
    for (let i = 0; i < word.length; i++) {
      let prevWord = word.slice(0, i) + word.slice(i + 1);
      if (dp.has(prevWord)) {
        dp.set(word, Math.max(dp.get(word), dp.get(prevWord) + 1));
      }
    }

    // Track the longest chain found so far
    longestChain = Math.max(longestChain, dp.get(word));
  }

  return longestChain;
}

// Optimal Substructure, Overlapping Subproblems

// time complexity:  O(n log n + n * k) => O(n * k)  , k is the length of the word
// space complexity: O(n * k), k for the length of words

// note: map of numbers is O(n) space complexity, map of words is O(n * k) space complexity
