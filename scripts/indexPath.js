import { breadthFirstSearch } from "./algorithms/breadthFirstSearch.js";
import { createAdjacencyList } from "./createAdjacencyList.js";
import { depthFirstSearch, showPathDFS } from "./algorithms/depthFirstSearch.js";
import { Dijkstras } from "./algorithms/Dijkstras.js";
import { AStar } from "./algorithms/AStar.js";

const section = document.querySelector('.visualizer');
const select = document.querySelector('select');
const startBtn = document.querySelector('button.start');

let startNode = document.querySelector('.node.start');
let finishNode = document.querySelector('.node.finish');

let dragged;

let algo = '';

function createGrid() {
  for (let row = 0; row < 30; row++) {
    for (let column = 0; column < 50; column++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('row', row);
      newDiv.setAttribute('column', column);
      newDiv.classList.add('node');
      newDiv.classList.contains('start') ?
        newDiv.setAttribute('weight', 0) : newDiv.setAttribute('weight', 1);

      newDiv.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('start') || e.target.classList.contains('finish')) {
          dragged = e.target;
        }
      });

      newDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
      }, false);

      newDiv.addEventListener('drop', (e) => {
        if (dragged.classList.contains('start')) {
          dragged.classList.remove('start');
          e.target.classList.add('start');
          startNode = e.target;
        }

        if (dragged.classList.contains('finish')) {
          dragged.classList.remove('finish');
          e.target.classList.add('finish');
          finishNode = e.target;
        }

      });

      newDiv.addEventListener('dragend', (e) => {
        addDradSToMainNodes();
      })
      section.appendChild(newDiv);
    }
  }


  let leftMouseKeyIsDown = false;
  const divs = document.querySelectorAll('.node');
  divs.forEach((node) => {
    node.addEventListener('mousedown', (e) => {
      leftMouseKeyIsDown = true;
      if (e.target.classList.contains('start') || e.target.classList.contains('finish')) {
        return;
      }
      e.target.classList.add('blocked');
    })
  })
}

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

createGrid();
addStarAndEndNodes();
addDradSToMainNodes();

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

function addWall(e) {
  if (leftMouseKeyIsDown)
  {
    if (e.target.classList.contains('start') || e.target.classList.contains('finish')) {
      return;
    }
    e.target.classList.add('blocked');
  }
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
    clearGrid();
  })
})()