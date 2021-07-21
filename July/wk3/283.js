// 283. Move Zeroes
// nums = [0,1,0,3,12]
var moveZeroes = function(nums) {
    const obj = {}

    let anchor = 0;

    for(let observer = 0;observer < nums.length; observer++) {
        if(nums[observer] !== 0) {
            let temp = nums[observer];
            nums[observer] = 0;
            nums[anchor] = temp;
            anchor++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));