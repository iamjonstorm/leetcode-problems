/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var splitDigits = digits.split("");
    if(splitDigits.length == 0) {
        return [];
    }
    
    var map = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    };
    
    var allPossibleLetterCombinations = [];
    helper("", digits.length, splitDigits, map, allPossibleLetterCombinations);
    return allPossibleLetterCombinations;
};

var helper = function(current, length, input, map, combinations) {
    if(current.length == length) {
        combinations.push(current);
        return;
    }
    var possibleKeys = map[input[0]];
    for(var i = 0; i < possibleKeys.length; i++) {
        var newInput = input.slice();
        newInput.shift();
        helper(current + possibleKeys[i], length, newInput, map, combinations)
    }
};