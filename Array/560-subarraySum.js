/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let prefixSum = 0;
  let count = 0;
  let prefixSumMap = new Map();
  prefixSumMap.set(0, 1); // Base case: a prefix sum of 0 is seen once.

  for (let num of nums) {
    prefixSum += num;
    // Check if (prefixSum - k) exists in the map
    if (prefixSumMap.has(prefixSum - k)) {
      count += prefixSumMap.get(prefixSum - k);
    }
    // Update the map with the current prefix sum
    prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
  }

  return count;
};
