/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    var pointer = 0;
    var counter = 0;
    while(pointer < s.length) {
        var romanValue = romans[s[pointer]];
        if((pointer + 1) < s.length && romanValue < romans[s[pointer + 1]]) {
            counter += (romans[s[pointer + 1]] - romanValue);
            pointer += 2;
        } else {
            counter += romanValue;
            pointer++;
        }
    }
    
    return counter;
};