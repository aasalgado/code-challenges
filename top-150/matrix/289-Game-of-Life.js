var gameOfLife = function (board) {
  let rows = board.length;
  let cols = board[0].length;

  var liveNeighbors = function (r, c) {
    let liveNeighbors = 0;
    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (i >= 0 && i < rows && j >= 0 && j < cols && (i !== r || j !== c)) {
          if (board[i][j] === 1 || board[i][j] === -1) {
            liveNeighbors++;
          }
        }
      }
    }
    return liveNeighbors;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let count = liveNeighbors(r, c);
      if (board[r][c] === 1 && (count < 2 || count > 3)) {
        board[r][c] = -1;
      }
      if (board[r][c] === 0 && count === 3) {
        board[r][c] = 2;
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === -1) {
        board[r][c] = 0;
      } else if (board[r][c] === 2) {
        board[r][c] = 1;
      }
    }
  }
};
