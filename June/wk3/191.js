// Number of 1 Bits
var hammingWeight = function(n) {
    let str = n.toString(2), count = 0
    for (let s of str) {
        if (s === '1') count ++
    }
    return count
};

console.log(hammingWeight(00000000000000000000000000001011))