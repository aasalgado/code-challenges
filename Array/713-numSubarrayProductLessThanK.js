var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0; // If k is less than or equal to 1, no product can be less than k

  let product = 1;
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right]; // Multiply the current number to the product

    // Shrink the window if the product is greater than or equal to k
    while (product >= k) {
      product /= nums[left];
      left++;
    }

    // The number of subarrays ending at `right` and having product less than k
    count += right - left + 1;
  }

  return count;
};
