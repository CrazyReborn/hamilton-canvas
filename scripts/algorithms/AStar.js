import { sleep } from "../sleep.js";

export async function AStar(graph, start, parent) {
  let parentNode = parent;
  const startNode = document.querySelector(`.node[row="${start.split(' ')[0]}"][column="${start.split(' ')[1]}"]`);
  const startHeuristic = getHeuristic(startNode);
  const table = {};
  for (const [node, edges] of Object.entries(graph)) {
    table[node] = {d: Infinity, parent: null};
  };
  const queue = [ [ start, startHeuristic, 0, parentNode] ];
  table[start] = { d: 0, parent: parentNode };

  while(queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    const shifted = queue.shift();
    const dist = shifted[2];
    const current = shifted[0];
    const parentNode = shifted[3];

    const row = current.split(' ')[0];
    const column = current.split(' ')[1];

    const node = document.querySelector(`.node[row="${row}"][column="${column}"]`);

    if (node.classList.contains('visited') || node.classList.contains('blocked')) continue;
    if (node.classList.contains('finish')) {
      const prevDistance = table[current].d;
      if (dist < prevDistance) {
        table[current] = { d: dist, parent: parentNode };
      }
      createPath(current, start, table);
      break;
    }

    await sleep(11);


    node.classList.contains('start')? '' : node.classList.add('visited');

    if (current != parentNode) {
      const prevDistance = table[current].d;
      if (dist < prevDistance) {
        table[current] = { d: dist, parent: parentNode };
      }
    }

    for (const neighbor of graph[current]) {
      const childRow = neighbor.split(' ')[0];
      const childColumn = neighbor.split(' ')[1];

      const childNode = document.querySelector(`.node[row="${childRow}"][column="${childColumn}"]`);
      const childWeight = getWeight(childNode);
      const heuristic = getHeuristic(childNode);
      queue.push([neighbor, heuristic + childWeight, childWeight + dist, current]);
    }
  }
}

function getWeight(node) {
  return parseInt(node.getAttribute('weight'));
}

async function createPath(finishNode, startNode, table) {
  const queue = [ finishNode ];
  const path = [];
  while(queue.length > 0) {
    const current = queue.shift();
    const newCurrent = table[current].parent;
    if (current == startNode) break;
    path.push(current);
    queue.push(newCurrent);
  }
  
  for (const coord of path) {
    const row = coord.split(' ')[0];
    const column = coord.split(' ')[1];
    await sleep(33);
    const node = document.querySelector(`.node[row="${row}"][column="${column}"]`);
    node.classList.add('path');
  }
}

function getHeuristic(node) {
  return parseInt(node.getAttribute('heuristic'));
}