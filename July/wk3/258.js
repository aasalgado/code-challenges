// 258. Add Digits
var addDigits = function(num) {
    if(num === 0) return 0;
    let arr = num.toString().split('');

    while(arr.length > 1){
        let sum = 0;
        arr.forEach(x => {
            sum += +x
        })
        arr = sum.toString().split('');
    }

    return arr[0];
};

console.log(addDigits(38));