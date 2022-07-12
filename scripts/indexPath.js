import { createAdjacencyList } from "./algorithms/createAdjacencyList.js";
import { deapthFirstSearch } from "./algorithms/deapthFirstSearch.js";
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
      if (row == 3 && column == 2) newDiv.classList.add('start');
      if (row == 10 && column == 22) newDiv.classList.add('finish');
      section.appendChild(newDiv);
    }
  }
  const divs = document.querySelectorAll('.node');
  divs.forEach((node) => {
    node.addEventListener('click', (e) => {
      e.target.classList.add('blocked');
    })
  })
}

createGrid();

let graph = createAdjacencyList(document.querySelectorAll('.node'));
console.log(graph);
const start = document.querySelector('#start');
start.addEventListener('click', () => {
  deapthFirstSearch(graph, '3 2');
})
