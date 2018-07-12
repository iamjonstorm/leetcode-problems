/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    var combinations = [];
    generate("", n*2, combinations);
    return combinations;
};

var generate = function(current, length, combinations) {
    if(!couldBeValid(current, length)) {
        return combinations;
    }
    if(current.length == length) {
        if(isValid(current)) {
            combinations.push(current);
        }
        return combinations;
    } else {
        generate(current + "(", length, combinations);
        generate(current + ")", length, combinations);
    };
};

var couldBeValid = function(input, length) {
    var splitInput = input.split("");
    if(splitInput.length == 0) {
        return true;
    }
    var balance = 0;
    for(var i = 0; i < splitInput.length; i++) {
        if(splitInput[i] == "(") {
            balance++;
        }
        if(splitInput[i] == ")") {
            balance--;
        }
    }
        
    if(balance < 0) {
        return false;
    }
    
    var remainingCharacters = length - splitInput.length;
    if(balance == 0 && remainingCharacters % 2 != 0) {
        return false;
    }
    //____
    //((
    if(balance > remainingCharacters) {
        return false;
    }
    
    return true;
    
}

var isValid = function(input) {
    var splitInput = input.split("");
    if(splitInput.length == 0) {
        return true;
    }
    var balance = 0;
    for(var i = 0; i < splitInput.length; i++) {
        if(splitInput[i] == "(") {
            balance++;
        }
        if(splitInput[i] == ")") {
            balance--;
        }
        if(balance < 0) {
            return false;
        }
    }
    if(balance != 0) {
        return false;
    }
    return true;
};