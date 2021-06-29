// #190 Reverse Bits
// n = 00000010100101000001111010011100
var reverseBits = function(n) {
    const reverseStr = n.toString(2).split('').reverse();
    while(reverseStr.length <32){ reverseStr.push('0')}
    return parseInt(reverseStr.join(''), 2);
};

console.log(reverseBits(00000010100101000001111010011100))