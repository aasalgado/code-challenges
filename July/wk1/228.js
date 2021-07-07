// 228. Summary Ranges
// [0,1,2,4,5,7]
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [`${nums[0]}`];
    let ptr = 0;
    let results = [];

    for(let i=1; i<nums.length; i++) {
        if(nums[i] - nums[i - 1] > 1){
            i - ptr > 1 ? results.push(`${nums[ptr]} -> ${nums[i - 1]}`) : results.push(`${nums[ptr]}`)
            ptr = i;
            if (ptr === nums.length-1){
                results.push(`${nums[ptr]}`)
            }
        } else if (i === nums.length-1) {
            results.push(`${nums[ptr]} -> ${nums[nums.length-1]}`)
        }
    }
    return results;
};

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
console.log(summaryRanges([0]))