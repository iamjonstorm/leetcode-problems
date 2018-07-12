/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) {
        return s;
    }
    var ans = [];
    var modifiedString = s.split('');
    var zagStepPosition = 1;
    var direction = "down";
    while(modifiedString.length != 0) {
        if(direction == "down") {
            var vertical = [];
            for(var i = 0; i < numRows; i++) {
                if(modifiedString.length == 0) {
                    vertical.push('');
                } else {
                    vertical.push(modifiedString[0]);
                    modifiedString.shift();
                }
            }
            ans.push(vertical);
            if(numRows != 2) {
                direction = "zag";
            }
        } else if(direction == "zag") {
            var zagVertical = [];
            
            for(var i = 0; i < numRows; i++) {
                if(i == numRows - zagStepPosition - 1) {
                    zagVertical.push(modifiedString[0]);
                    modifiedString.shift();
                } else {
                    zagVertical.push('');
                }
            }

            ans.push(zagVertical);            
            if(zagStepPosition == numRows-2) {
                direction = "down";
                zagStepPosition = 1;
            } else {
                zagStepPosition++;
            }

        }
    }
    
    var finalAnswer = '';
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j < ans.length; j++) {
            var letter = ans[j][i];
            if(letter != "") {
                finalAnswer += ans[j][i];
            }
        }
    }
    /**
    var finalAnswer = [];
    for(var i = 0 ; i < ans.length; i++) {
        finalAnswer.push(ans[i]);
    }**/
    
    return finalAnswer.toString();
};