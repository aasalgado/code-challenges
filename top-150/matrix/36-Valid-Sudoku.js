var isValidSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for(let r=0; r<board.length; r++) {
        for(let c=0; c<board[r].length; c++) {
            let num = board[r][c];
            if(num === '.') continue;
            
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if(rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }
        
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        };
    };

    return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));