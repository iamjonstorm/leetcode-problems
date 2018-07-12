/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    if(x < 10) {
        return true;
    }
    
    var digitCounter = x;
    var numberOfDigits = 1;
    while(true) {
        if(digitCounter < 10) {
            break;
        }
        digitCounter = digitCounter / 10;
        numberOfDigits++;
    }
    //6 digits - check first and last 3
    //5 digits - check first and last 2
    var halfOfNumberOfDigits = parseInt(numberOfDigits/2);
    
    //10000
    // 0000
    var oldFirstDigit = 0;
    var oldLastDigit = 0;
    for(var i = 1; i <= halfOfNumberOfDigits; i++) {
        var firstDigit = Math.floor((x - oldFirstDigit) / Math.pow(10,numberOfDigits-i));
        var lastDigit = (x - oldLastDigit) % Math.pow(10, i) / Math.pow(10, i-1);
        
        if(firstDigit != lastDigit) {
            return false;
        }
        oldFirstDigit += firstDigit * Math.pow(10, numberOfDigits-i);
        oldLastDigit += lastDigit * Math.pow(10, i-1);

    }
    
    return true;

    
};

/**
    var digitCounter = x;
    var numberOfDigits = 1;
    while(true) {
        if(digitCounter < 10) {
            break;
        }
        digitCounter = digitCounter / 10;
        numberOfDigits++;
    }
    //6 digits - check first and last 3
    //5 digits - check first and last 2
    var halfOfNumberOfDigits = parseInt(numberOfDigits/2);
    
    //10000
    // 0000
    var oldFirstDigit = 0;
    var oldLastDigit = 0;
    for(var i = 1; i <= halfOfNumberOfDigits; i++) {
        var firstDigit = Math.floor((x - oldFirstDigit) / Math.pow(10,numberOfDigits-i));
        var lastDigit = (x - oldLastDigit) % Math.pow(10, i) / Math.pow(10, i-1);
        
        if(firstDigit != lastDigit) {
            return false;
        }
        oldFirstDigit += firstDigit * Math.pow(10, numberOfDigits-i);
        oldLastDigit += lastDigit * Math.pow(10, i-1);

    }
    
    return true;
    
    
    
    
    
    try 1
    
    while(true) {
        if(number < 10) {
            //Single number is palindrome
            return true;
        }
        
        var lastDigit = number % 10;
        var firstDigit = number;
        var tensCounter = 0;
        while(firstDigit > 10) {
            firstDigit = firstDigit / 10;
            tensCounter++;
        }
        
        firstDigit = parseInt(firstDigit);
        lastDigit = parseInt(lastDigit);

        if(firstDigit != lastDigit) {
            return false;
        }
        
        number = number - lastDigit;
        var subtractor = Math.pow(10, tensCounter) * firstDigit;
        number = number - subtractor;
        number = number / 10;
        // 121 % 10 =   1 //last digit
        // 121 / 10 =  12
        // 12  * 10 = 120
        // 434 / 10 = 43 / 10 = 4 // first digit
        //  1000021
        // -1000001
        //  0000020  
        // Number of digits
        //  1000021 - 7 digits
        //  100 .   - 3 digits - 10^2
        //  1000    - 4 digits - 10^3
        
        //Get 2nd to last digit
        //9999
        //9999 / 100 = 
        **/