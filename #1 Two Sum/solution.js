/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashMap = [];
    for(var i = 0; i < nums.length; i++) {
        var compliment = target - nums[i];
        if(hashMap[compliment] != undefined) {
            return [i, hashMap[compliment]].sort()
        } else {
            hashMap[nums[i]] = i;
        }
    }
};