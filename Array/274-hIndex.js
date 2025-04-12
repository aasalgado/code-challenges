var hIndex = function (citations) {
  let max = 0;
  let arr = citations.sort((a, b) => b - a); // Sort the citations in descending order

  // Loop through the sorted array using the index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i + 1) {
      // Compare with i+1 to check how many papers have at least i+1 citations
      max = i + 1; // Update the h-index if condition is met
    } else {
      break; // If no more valid papers, break the loop early
    }
  }

  return max;
};
