// 204. Count Primes
var countPrimes = function(n) {
    if (n === 1 || n === 0) {
        return 0;
    }
    let count = 2;
    let results = 0; 

    while (count <= n) {
        if (count % 2 !== 0) {
            results++
        }
        count++;
    }
    return results;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));