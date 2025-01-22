var decodeString = function (s) {
  let currentString = "";
  let stack = [];
  let currentNum = 0;

  for (let char of s) {
    if (!NaN(char)) {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push([currentString, currentNum]);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      let [prevString, repeatCount] = stack.pop();
      currentString = prevString + currentString.repeat(repeatCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
};
