import { breadthFirstSearch } from "./algorithms/breadthFirstSearch.js";
import { createAdjacencyList } from "./createAdjacencyList.js";
import { depthFirstSearch } from "./algorithms/depthFirstSearch.js";
import { Dijkstras } from "./algorithms/Dijkstras.js";
import { getCoords, addHeuristic, createGrid } from './gridFunctions.js'
import { AStar } from "./algorithms/AStar.js";

const section = document.querySelector('.visualizer');
const select = document.querySelector('select');
const startBtn = document.querySelector('button.start');

let startNode = document.querySelector('.node.start');
let finishNode = document.querySelector('.node.finish');

let algo = '';

function addStarAndEndNodes() {
  const start = document.querySelector(`.node[row="3"][column="2"]`).classList.add('start');
  const finish = document.querySelector(`.node[row="25"][column="45"]`).classList.add('finish');
}

function addDradSToMainNodes() {
  let startNode = document.querySelector('.node.start');
  let finishNode = document.querySelector('.node.finish');

  startNode.setAttribute('draggable', true);
  finishNode.setAttribute('draggable', true);
}

createGrid(section);
addStarAndEndNodes();
addDradSToMainNodes();

let graph = createAdjacencyList(document.querySelectorAll('.node'));

(function main() {
  const clearBtn = document.querySelector('button.clear');
  const nodeList = document.querySelectorAll('.node');

  startNode = document.querySelector('.node.start');
  finishNode = document.querySelector('.node.finish');

  select.addEventListener('change', (e) => {
    addHeuristic(nodeList, finishNode);
    algo = e.target.value;
  });

  startBtn.addEventListener('click', () => {
    const startCoords = getCoords(startNode);
    switch (algo) {
      case 'depth-first':
        depthFirstSearch(graph, startCoords);
        break;
      case 'breadth-first':
        breadthFirstSearch(graph, startCoords);
        break;
      case 'dijkstra':
        Dijkstras(graph, startCoords, startCoords);
        break;
      case 'a-star':
        addHeuristic(nodeList, finishNode);
        AStar(graph, startCoords, startCoords);
    }
  })

  clearBtn.addEventListener('click', () => {
    clearGrid(section);
  })
})()