/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == "") {
        return 0;
    }
    
    for(var i = 0; i < haystack.length; i++){
        if(haystack[i] != needle[0]) {
            continue;
        }
        if(needle.length > haystack.length - i) {
            return -1;
        }
        var pointer = i;
        var found = true;
        for(var j = 0; j < needle.length; j++) {
            if(haystack[pointer] != needle[j]) {
                found = false;
                break;
            }
            pointer++;
        }
        if(found) {
            return i;
        }
    }
    
    return -1;
};