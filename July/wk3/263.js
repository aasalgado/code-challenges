// 263 Ugly Number
var isUgly = function(num) {
    if (num === 0) return false
    var n
    while (num !== 1) {
      n = num / 5
      if (Math.floor(n) === n) {
        num = n
        continue
      }
  
      n = num / 3
      if (Math.floor(n) === n) {
        num = n
        continue
      }
  
      n = num / 2
      if (Math.floor(n) === n) {
        num = n
        continue
      }
  
      return false
    }
  
    return true
  };

console.log(isUgly(6))
console.log(isUgly(8))
console.log(isUgly(14))
console.log(isUgly(1))