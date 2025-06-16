function rob(nums) {
  if (nums.length === 1) return nums[0]; // Edge case: only one house

  // Helper function to solve the House Robber problem (non-circular)
  function robLinear(nums) {
    let prev2 = 0; // dp[i-2]
    let prev1 = 0; // dp[i-1]

    for (let num of nums) {
      let temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
    }

    return prev1;
  }

  // Case 1: Rob houses from 0 to n-2
  let case1 = robLinear(nums.slice(0, nums.length - 1));

  // Case 2: Rob houses from 1 to n-1
  let case2 = robLinear(nums.slice(1));

  // Return the maximum of the two cases
  return Math.max(case1, case2);
}

// Time Complexity:
// The function robLinear(nums) runs in O(n) time because it iterates through the array once.
// We call robLinear twice: once for nums.slice(0, nums.length - 1) and once for nums.slice(1).
// Both calls are linear in size, so the overall time complexity is: O(n)
// Where n is the length of the nums array.

// Space Complexity:
// The space complexity is O(1) because we only use a constant amount of extra space (prev1 and prev2) in the robLinear function.
// The nums.slice() method creates new arrays, which would take O(n) space in the worst case.
// However, this space is not used during the iteration itself and is only used for slicing the array.
// Thus, the space complexity is: O(n) due to the slicing.

// House Robber II follows the Optimal Substructure and Overlapping Subproblems patterns in Dynamic Programming:
// Optimal Substructure: The solution to robbing the houses involves building up optimal solutions to smaller subproblems (deciding whether to rob a house or not).
// Overlapping Subproblems: The decision-making process overlaps as the same subproblems (the profit from previous houses) are solved multiple times as we move through the houses.
