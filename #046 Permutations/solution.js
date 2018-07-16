/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var all = [];
    helper([], nums, [], all);
    return all;
};

var helper = function(current, nums, seenIndexes, all) {
    if(current.length == nums.length) {
        all.push(current);
        return;
    } 
    
    for(var i = 0; i < nums.length; i++) {
        if(seenIndexes.indexOf(i) != -1) {
            continue;
        }
        var currentCopy = current.slice();
        currentCopy.push(nums[i]);
        var seenIndexesCopy = seenIndexes.slice();
        seenIndexesCopy.push(i);
        helper(currentCopy, nums, seenIndexesCopy, all);
    }
};