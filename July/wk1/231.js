// 231. Power of Two
// n = 1, n = 16
var isPowerOfTwo = function(n) {
    let results = 0;
    let power = 0;
    while (results < n) {
        results = Math.pow(2, power);
        // console.log(results);
        if(results === n) {
            return true
        } else {
            power++;
        }
    }
    return false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));