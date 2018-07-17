/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    
    var prevElem = nums[0];
    for(var i = 1; i < nums.length; i++){
        if(nums[i] == prevElem) {
            nums.splice(i, 1);
            i--;
        } else {
            prevElem = nums[i];
        }
    }
    
    return nums.length;
};