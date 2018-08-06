/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var startPointer = 0;
    var endPointer = height.length-1;
    var maxArea = 0;
    
    while(startPointer < endPointer) {
        var distance = endPointer - startPointer;
        var area = 0;
        if(height[startPointer] <= height[endPointer]) {
            area = height[startPointer] * (endPointer - startPointer);
            if(area > maxArea) {
                maxArea = area;
            }
            startPointer++;
        } else {
            area = height[endPointer] * (endPointer - startPointer);
            if(area > maxArea) {
                maxArea = area;
            }
            endPointer--;
        }
    }
    
    return maxArea;

};