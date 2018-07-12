/**
 * @param {string} s
 * @return {boolean}
 */

//"([)]"
var isValid = function(s) {
    var input = s.split("");
    var lastOpenChar = [];
    var parenBalance = 0;
    var curlyBalance = 0;
    var bracketBalance = 0;
    var compliment = {};
    compliment[")"] = "(";
    compliment["}"] = "{";
    compliment["]"] = "[";
    for(var i = 0; i < input.length; i++) {
        switch(input[i]) {
            case "(":
                parenBalance++;
                lastOpenChar.push(input[i]);
                break;
            case "{":
                curlyBalance++;
                lastOpenChar.push(input[i]);
                break;
            case "[":
                bracketBalance++;
                lastOpenChar.push(input[i]);
                break;
            case ")":
                parenBalance--;
                break;
            case "}":
                curlyBalance--;
                break;
            case "]":
                bracketBalance--;
                break;
            default:
                throw "Unhandled char";
        }
        if(parenBalance < 0 || curlyBalance < 0 || bracketBalance < 0) {
            return false;
        }
        if(lastOpenChar.length == 0) {
            continue;
        }
        if(input[i] == ")" || input[i] == "}" || input[i] == "]") {
            if(lastOpenChar[lastOpenChar.length-1] == compliment[input[i]]) {
                lastOpenChar.pop();
            } else {
                return false;
            }
        }
        
    }
    if(parenBalance != 0 || curlyBalance != 0 || bracketBalance != 0) {
        return false;
    }
    return true;
};