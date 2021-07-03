// 217. Contains Duplicate
var containsDuplicate = function(nums) {
    let uniqueSet = new Set();

    for( let num of nums) {
        if(!uniqueSet.has(num)){
            uniqueSet.add(num);
        } else {
            return true;
        }
    }

    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

