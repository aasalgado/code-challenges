var compress = function (chars) {
  let write = 0; // Pointer for the "write" position in the array
  let read = 0; // Pointer for the "read" position to traverse the array

  while (read < chars.length) {
    let currentChar = chars[read];
    let count = 0;

    // Count the occurrences of the current character
    while (read < chars.length && chars[read] === currentChar) {
      count++;
      read++;
    }

    // Write the current character
    chars[write++] = currentChar;

    // If the character repeats, write the count
    if (count > 1) {
      let countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[write++] = countStr[i];
      }
    }
  }

  return write; // Length of the compressed string
};

chars = ["a", "a", "b", "b", "c", "c", "c"];
