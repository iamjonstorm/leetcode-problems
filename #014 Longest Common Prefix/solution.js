/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return "";
    }
    
    var shortestLengthString = strs[0].length;
    for(var i = 0; i < strs.length; i++) {
        if(strs[i].length < shortestLengthString) {
            shortestLengthString = strs[i].length;
        }
    }
    
    var pointer = 0;
    var longestCommonPrefix = "";
    while(pointer < shortestLengthString) {
        var commonChar = null;
        for(var j = 0; j < strs.length; j++) {
            if(!commonChar) {
                commonChar = strs[j][pointer];
                continue;
            } 
            if(strs[j][pointer] != commonChar) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += commonChar;
        pointer++;
    }
    
    return longestCommonPrefix;
};