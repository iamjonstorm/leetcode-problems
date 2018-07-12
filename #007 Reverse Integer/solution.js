/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var arr = x.toString().split('');
    var ans = '';
    if(arr.indexOf("-") != -1) {
        ans += "-";
    }
    for(var i = arr.length-1; i >= 0; i--) {
        if(arr[i] != "-") {
            ans += arr[i];
        }
    }
    var answer = parseInt(ans);
    if(answer > 2147483647 || answer < -2147483648) {
        return 0;
    }
    return answer;
};