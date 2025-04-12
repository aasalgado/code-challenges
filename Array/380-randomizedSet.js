var RandomizedSet = function () {
  this.map = new Map(); // Stores value and its index in the array
  this.arr = []; // Stores the elements in the set
};

RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false; // If the element already exists, do nothing
  }
  this.map.set(val, this.arr.length); // Add value to map with its index in arr
  this.arr.push(val); // Add value to the end of the array
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false; // If the element doesn't exist, do nothing
  }

  // Get the index of the element to be removed
  const index = this.map.get(val);

  // Swap the element with the last element in the array
  const lastElement = this.arr[this.arr.length - 1];
  this.arr[index] = lastElement;
  this.map.set(lastElement, index); // Update the map with the new index of the last element

  // Remove the last element from the array
  this.arr.pop();
  this.map.delete(val); // Remove the value from the map
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  // Generate a random index from 0 to arr.length - 1
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex]; // Return the element at the random index
};
