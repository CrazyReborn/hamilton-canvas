import { breadthFirstSearch } from "./algorithms/breadthFirstSearch.js";
import { createAdjacencyList } from "./createAdjacencyList.js";
import { depthFirstSearch } from "./algorithms/depthFirstSearch.js";
import { Dijkstras } from "./algorithms/Dijkstras.js";
import {
  addDradSToMainNodes,
  getCoords,
  addHeuristic,
  clearGrid,
  clearWalls,
  clearPath,
  createGrid,
  colorInPink,
} from './gridFunctions.js'
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

createGrid(section, startNode, finishNode);
addStarAndEndNodes();
addDradSToMainNodes(startNode, finishNode);

let graph = createAdjacencyList(document.querySelectorAll('.node'));
startNode = document.querySelector('.node.start');
finishNode = document.querySelector('.node.finish');

(function main() {
  const clearBtn = document.querySelector('button.clear');
  const clearWallsBtn = document.querySelector('button.clear-walls');
  const clearPathBtn = document.querySelector('button.clear-path');
  const nodeList = document.querySelectorAll('.node');

  select.addEventListener('change', (e) => {
    addHeuristic(nodeList, finishNode);
    algo = e.target.value;
  });

  clearWallsBtn.addEventListener('click', () => {
    clearWalls(section);
  })

  clearPathBtn.addEventListener('click', () => {
    clearPath(section);
  })

  startBtn.addEventListener('click', async () => {
    startNode = document.querySelector('.node.start');
    finishNode = document.querySelector('.node.finish');
    let startCoords = getCoords(startNode);
    let result = false;
    switch (algo) {
      case 'depth-first':
         result = await depthFirstSearch(graph, startCoords);
        break;
      // case 'breadth-first':
      //   breadthFirstSearch(graph, startCoords);
      //   break;
      case 'dijkstra':
        result = await Dijkstras(graph, startCoords, startCoords);
        break;
      case 'a-star':
        addHeuristic(nodeList, finishNode);
        result = await AStar(graph, startCoords, startCoords);
        
        break;
    }
    if (!result) colorInPink(section);
  })

  clearBtn.addEventListener('click', () => {
    clearGrid(section);
  })
})()