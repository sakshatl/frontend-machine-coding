const gridContainerElement = document.getElementById('grid-container');
const activatedCells = [];

function checkForDeactivation() {
  const isAllActivated = activatedCells.length === 9;
  if(isAllActivated) {
    let intervalId;
    intervalId = setInterval(() => {
      const cell = activatedCells.pop();
      cell.classList.remove('activated');
      if(!activatedCells.length) {
        clearInterval(intervalId);
      }
    }, 300);
  }
}

function handleActivateCell(e) {
  const cell = e.target;
  // Activate the cell and push it to activatedCell collection
  cell.classList.add('activated');
  activatedCells.push(cell);
  
  // Check for de-activation on every click
  checkForDeactivation();
}

function renderGridsUI() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.innerHTML = i + 1
    div.addEventListener('click', handleActivateCell, { once: true });
    gridContainerElement.appendChild(div)
  }
}

renderGridsUI();