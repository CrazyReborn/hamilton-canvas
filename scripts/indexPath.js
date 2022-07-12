const section = document.querySelector('.visualizer');

(function main() {
})

function createGrid() {
  for (let row = 0; row < 20; row++) {
    for (let column = 0; column < 23; column++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('row', row);
      newDiv.setAttribute('column', column);
      newDiv.classList.add('node');
      section.appendChild(newDiv);
    }
  }
}

createGrid();