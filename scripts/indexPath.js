import { breadthFirstSearch } from "./algorithms/breadthFirstSearch.js";
import { createAdjacencyList } from "./createAdjacencyList.js";
import { depthFirstSearch } from "./algorithms/depthFirstSearch.js";
import { Dijkstras } from "./algorithms/Dijkstras.js";
import { addWall, createGrid } from './gridFunctions.js'
import { AStar } from "./algorithms/AStar.js";

const section = document.querySelector('.visualizer');
const select = document.querySelector('select');
const startBtn = document.querySelector('button.start');

let startNode = document.querySelector('.node.start');
let finishNode = document.querySelector('.node.finish');

let dragged;

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

function getCoords(node) {
  const row = parseInt(node.getAttribute('row'));
  const column = parseInt(node.getAttribute('column'));
  const coords = `${row} ${column}`;
  return `${row} ${column}`;
}

function addHeuristic(nodeList, finishNode) {
  const finishNodeRow = parseInt(finishNode.getAttribute('row'));
  const finishNodeColumn = parseInt(finishNode.getAttribute('column'));


  nodeList.forEach((node) => {
    const thisNodeRow = parseInt(node.getAttribute('row'));
    const thisNodeColumn = parseInt(node.getAttribute('column'));
    let heuristic;
    if (finishNodeRow > thisNodeRow) {
      if (finishNodeColumn > thisNodeColumn) {
        heuristic = finishNodeRow - thisNodeRow + finishNodeColumn - thisNodeColumn;
      } else {
        heuristic = finishNodeRow - thisNodeRow + thisNodeColumn - finishNodeColumn;
      }
    } else {
      if (finishNodeColumn > thisNodeColumn) {
        heuristic = thisNodeRow - finishNodeRow + finishNodeColumn - thisNodeColumn;
      } else {
        heuristic = thisNodeRow - finishNodeRow + thisNodeColumn - finishNodeColumn;
      }
    }

    node.setAttribute('heuristic', heuristic);
  });
}

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