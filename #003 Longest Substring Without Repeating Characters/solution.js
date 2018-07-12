/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) {
        return 0;
    }
    var maxSubString = 1;
    var hashMap = [];

    var i = 0;
    while(i < s.length) {
        var longestSubString = 1;
        hashMap = [];
        hashMap[s[i]] = i;
        for(var j = i+1; j < s.length; j++) {
            if(hashMap[s[j]] != undefined) {
                i = hashMap[s[j]];
                break;
            } else {
                longestSubString++;
                hashMap[s[j]] = i;
                if(longestSubString > maxSubString) {
                    maxSubString = longestSubString;
                }
            }
        }
        i++;
    }
    
    return maxSubString;
};