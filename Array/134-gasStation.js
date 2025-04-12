var canCompleteCircuit = function (gas, cost) {
  let total_gas = 0; // Total gas available for the whole circuit
  let current_gas = 0; // Gas remaining at the current station
  let start = 0; // Start station index

  for (let i = 0; i < gas.length; i++) {
    total_gas += gas[i] - cost[i]; // Update the total gas difference
    current_gas += gas[i] - cost[i]; // Update current remaining gas

    // If at any point current_gas is negative, reset the start station
    if (current_gas < 0) {
      start = i + 1; // Move the start position to the next station
      current_gas = 0; // Reset current_gas to 0
    }
  }

  // If the total gas is less than the total cost, return -1 (no solution)
  return total_gas >= 0 ? start : -1;
};

// Explanation of the Code:
// total_gas: This variable keeps track of the total difference between the gas available and the cost required to travel between all stations. If the total gas is negative, it means there's no way to complete the journey, so we return -1.

// current_gas: This variable tracks the amount of gas we have while traveling from the current station. If it becomes negative at any point, it means we cannot travel further from the current start station, so we reset the start station to the next one.

// start: The starting station. If we find that we cannot continue the journey from the current station, we reset the starting station to the next one.

// Loop:

// We loop through all stations, updating the total_gas and current_gas at each step.

// If current_gas becomes negative, we reset the start station to the next index and reset current_gas to 0.

// Final Check:

// After the loop, if total_gas is non-negative, it means there's a valid start station, and we return that index (start).

// If total_gas is negative, we return -1, indicating that the journey cannot be completed from any station.

// Time Complexity:
// O(n), where n is the length of the gas array. We only need to loop through the array once, performing constant-time operations for each station.

// Space Complexity:
// O(1). We are only using a constant amount of extra space to store total_gas, current_gas, and start.
