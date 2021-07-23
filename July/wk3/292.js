// 292. Nim Game

var canWinNim = function(n) {
    return n % 4 !== 0;
};

console.log(canWinNim(4))
console.log(canWinNim(1))
console.log(canWinNim(2))


// 1  2  3  4  5  6
// W  W  W  L  W  W