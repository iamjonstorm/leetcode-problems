/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var trimmedString = str.trim();
    var validChars = ["-","+","0","1","2","3","4","5","6","7","8","9"];
    if(validChars.indexOf(trimmedString[0]) == -1) {
        return 0;
    }
    
    var ans = '';
    for(var i = 0; i < trimmedString.length; i++) {
        if(validChars.indexOf(trimmedString[i]) == -1) {
            break;
        }
        ans += trimmedString[i];
    }
    
    var finalAnswer = parseInt(ans);
    if(finalAnswer > 2147483647) {
        return 2147483647;
    }
    if(finalAnswer < -2147483648) {
        return -2147483648;
    }
    if(isNaN(finalAnswer)) {
        return 0;
    }
    return finalAnswer;
};