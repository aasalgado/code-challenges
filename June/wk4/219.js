// 219. Contains Duplicate II
var containsNearbyDuplicate = function(nums, k) {
   let myMap = new Map();

   for(let i=0; i<nums.length;i++) {
       const num = nums[i];

       if(myMap.has(num) && i - myMap.get(num) <= k){
        return true;
       } else {
        myMap.set(num, i);
       }
   }
   return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))