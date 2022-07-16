import { breadthFirstSearch } from "./algorithms/breadthFirstSearch.js";
import { createAdjacencyList } from "./createAdjacencyList.js";
import { depthFirstSearch, showPathDFS } from "./algorithms/depthFirstSearch.js";
import { Dijkstras } from "./algorithms/Dijkstras.js";

const section = document.querySelector('.visualizer');
const select = document.querySelector('select');
const startBtn = document.querySelector('button.start');

let algo = '';

function createGrid() {
  for (let row = 0; row < 20; row++) {
    for (let column = 0; column < 23; column++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('row', row);
      newDiv.setAttribute('column', column);
      
      newDiv.classList.add('node');
      if (row == 3 && column == 2) newDiv.classList.add('start');
      if (row == 10 && column == 22) newDiv.classList.add('finish');
      newDiv.classList.contains('start') ?
      newDiv.setAttribute('weight', 0) : newDiv.setAttribute('weight', 1)
      
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

function clearGrid() {
  for (let node of section.childNodes) {
    if (node.classList.contains('visited')
        || node.classList.contains('blocked')) {
      node.classList.remove('visited');
      node.classList.remove('blocked');
      node.classList.remove('path');
    }
  }
}

function getCoords(node) {
  const row = parseInt(node.getAttribute('row'));
  const column = parseInt(node.getAttribute('column'));
  const coords = `${row} ${column}`;
  console.log(coords);
  return `${row} ${column}`;
}

(function main() {
  const clearBtn = document.querySelector('button.clear');
  const startNode = document.querySelector('.node.start');

  select.addEventListener('change', (e) => {
    algo = e.target.value;
    console.log(algo);
  });

  startBtn.addEventListener('click', async () => {
    const startCoords = getCoords(startNode);
    switch(algo) {
      case 'depth-first':
        const found = await depthFirstSearch(graph, startCoords);
        found? showPathDFS(graph, startCoords) : console.log('no path exists');
        break;
      case 'breadth-first':
        breadthFirstSearch(graph, startCoords);
        break;
      case 'dijkstra':
        Dijkstras(graph, startCoords, startCoords);
    }
  })

  clearBtn.addEventListener('click', () =>{
    clearGrid();
  })
})()