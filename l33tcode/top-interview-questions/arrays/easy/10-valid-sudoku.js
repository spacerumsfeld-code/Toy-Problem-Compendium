// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true


//note: I did not develop this solution
var isValidSudoku = function(board) {
  // create an empty set for each row/col/square
  const rowRules = new Array(9).fill().map(() => new Set())
  const colRules = new Array(9).fill().map(() => new Set())
  const mixedRules = new Array(9).fill().map(() => new Set())

  // iterate through each cell on the board
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curr = board[row][col]

      // some tricky math to get the index of the 3x3 squares
      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)

      if (curr === ".") continue  // ignore dots

      // if the current number already exists in the set, board is invalid
      const a = rowRules[row].has(curr)
      const b = colRules[col].has(curr)
      const c = mixedRules[mixedIdx].has(curr)
      if (a || b || c) return false

      // add the number to the appropriate set
      rowRules[row].add(curr)
      colRules[col].add(curr)
      mixedRules[mixedIdx].add(curr)
    }
  }

  // all checks out
  return true
};

// Performance
// Runtime: 108ms, faster than ~43% of JavaScript online submissions for Valid Sudoku.

// Memory Usage: 43.9 MB, less than ~29% of JavaScript online submissions for Valid Sudoku.