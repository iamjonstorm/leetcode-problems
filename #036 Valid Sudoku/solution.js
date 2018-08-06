/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rowMap = {};
    var colMap = {};
    var boxMap = {};
    
    for(var row = 0; row < board.length; row++) {
        for(var col = 0; col < board[row].length; col++) {
            var value = board[row][col];
            if(isNaN(value)) {
                continue;
            }
            //Create Row Map
            if(rowMap[row] === undefined) {
                rowMap[row] = {};
            }
            if(rowMap[row][value] === undefined) {
                rowMap[row][value] = true;
            } else {
                return false;
            }
                        
            //Create Column Map
            if(colMap[col] === undefined) {
                colMap[col] = {};
            }
            if(colMap[col][value] === undefined) {
                colMap[col][value] = true;
            } else {
                return false;
            }
            
            //Create Box Map
            var boxRow = Math.floor(row / 3);
            var boxCol = Math.floor(col / 3);
            var boxKey = boxRow + "," + boxCol;
            if(boxMap[boxKey] === undefined) {
                boxMap[boxKey] = {};
            } 
            if(boxMap[boxKey][value] === undefined) {
                boxMap[boxKey][value] = true;
            } else {
                return false;
            }
            
        }
    }
    
    return true;
};