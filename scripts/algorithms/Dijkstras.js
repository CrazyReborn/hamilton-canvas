import { sleep } from "../sleep.js";

export async function Dijkstras(graph, start, parent) {
  let parentNode = parent;
  const table = {};
  for (const [node, edges] of Object.entries(graph)) {
    table[node] = {d: Infinity, parent: null};
  };
  const queue = [ [ start, 0, parentNode] ];
  table[start] = { d: 0, parent: parentNode };

  while(queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);      //console.log(table[current]);
    const shifted = queue.shift();
    const dist = shifted[1];
    const current = shifted[0];
    const parentNode = shifted[2];

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
      return true;
    }

    await sleep(5);


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
      queue.push([neighbor, childWeight + dist, current]);
    }
  }
  return false;
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
    await sleep(11);
    const node = document.querySelector(`.node[row="${row}"][column="${column}"]`);
    node.classList.add('path');
  }
}