const root = document.getElementById('root');

const BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

let isXSelected = true;

function handleCellClick(e, row, col) {
  // Put in value
  if(isXSelected) {
    e.target.innerHTML = "X";
    BOARD[row][col] = "X";
  } else {
    e.target.innerHTML = "O";
    BOARD[row][col] = "O";
  }

  // Check for win
  checkForWin();

  // Check for draw

  // Switch sides
  isXSelected = !isXSelected;
}

function checkForWin() {
   // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (
      BOARD[i][0] !== null &&
      BOARD[i][0] === BOARD[i][1] &&
      BOARD[i][1] === BOARD[i][2]
    ) {
      return true; // Row win
    }

    if (
      BOARD[0][i] !== null &&
      BOARD[0][i] === BOARD[1][i] &&
      BOARD[1][i] === BOARD[2][i]
    ) {
      return true; // Column win
    }
  }

  // Check diagonals
  if (
    BOARD[0][0] !== null &&
    BOARD[0][0] === BOARD[1][1] &&
    BOARD[1][1] === BOARD[2][2]
  ) {
    return true; // Diagonal win
  }

  if (
    BOARD[0][2] !== null &&
    BOARD[0][2] === BOARD[1][1] &&
    BOARD[1][1] === BOARD[2][0]
  ) {
    return true; // Diagonal win
  }

  return false; // No win
}

function renderBoardUI() {
  for (let row = 0; row < BOARD.length; row++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let col = 0; col < BOARD.length; col++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.addEventListener('click', (e) => handleCellClick(e, row, col), { once: true });
      rowElement.appendChild(cellElement);
    }
    root.appendChild(rowElement);
  }
}

renderBoardUI();




