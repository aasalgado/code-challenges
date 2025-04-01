var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If the price at day i is greater than the price at day i-1, make a transaction
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]; // Buy at day i-1 and sell at day i
    }
  }

  return profit;
};

// [7,1,5,3,6,4]

// Time Complexity:
// O(n): We only iterate through the array once, where n is the length of the array prices. This gives a linear time complexity.

// Space Complexity:
// O(1): We only use a constant amount of extra space (profit), so the space complexity is constant.
