var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n);

  // Step 1: Calculate the left products
  result[0] = 1; // No elements to the left of the first element
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Step 2: Calculate the right products and finalize the result
  let right = 1; // No elements to the right of the last element
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right *= nums[i];
  }

  return result;
};
