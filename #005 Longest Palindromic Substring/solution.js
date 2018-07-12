/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var longest = '';
    var hashMap = [];
    for(var position = 0; position < s.length; position++) {
        var character = s[position];
        if(hashMap[character] != undefined) {
            hashMap[character].push(position);
            for(var j = 0; j < hashMap[character].length; j++) {
                var substringToCheck = s.substring(hashMap[character][j], position+1);
                if(substringToCheck.length <= longest.length) {
                    continue;
                }
                if(!isPalindrome(substringToCheck)) {
                    continue;
                }
                if(substringToCheck.length > longest.length) {
                    longest = substringToCheck;
                }
            }
        } else {
            hashMap[character] = [position];
            if(s[position].length > longest.length) {
                longest = s[position];
            }
        }
    }
    
    return longest;
};

var isPalindrome = function(s) {
    if(s.length == 0) {
        return true;
    }
    if(s.length == 1) {
        return true;
    }
    if(s.length == 2) {
        if(s[0] == s[1]) {
            return true;
        }
        return false;
    }
    var startIndex = 0;
    var endIndex = s.length;
    if(s[startIndex] == s[endIndex-1]) {
        return isPalindrome(s.substring(startIndex+1, endIndex-1));
    }
    return false;
};