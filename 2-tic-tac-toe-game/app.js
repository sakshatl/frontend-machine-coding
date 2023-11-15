const cells = document.querySelectorAll('.cell');

const POSSIBLE_WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let isXSelected = true;

Array.from(cells).forEach((cell) => {
  cell.addEventListener('click', () => {
    if(isXSelected) {
      cell.innerHTML = "x"
    } else {
      cell.innerHTML = "o";
    }
    // 1. Check for win

    // 2. Check for draw
    
    // 3. Switch sides
    isXSelected = !isXSelected;
  }, { once: true });
});
