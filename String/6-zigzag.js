var convert = function (s, numRows) {
  if (numRows === 1) return s; // No zigzag pattern for a single row

  let rows = new Array(numRows).fill(""); // Initialize an array of empty strings for each row
  let currentRow = 0; // Start at the top row
  let goingDown = false; // We are initially moving down

  // Iterate through each character in the string
  for (let char of s) {
    rows[currentRow] += char; // Add the character to the current row

    // If we're at the top or bottom row, reverse the direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move to the next row
    currentRow += goingDown ? 1 : -1;
  }

  // Join all the rows to form the final result
  return rows.join("");
};
