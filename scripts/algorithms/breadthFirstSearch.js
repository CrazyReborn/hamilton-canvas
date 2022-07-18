import { sleep } from "../sleep.js";

export async function breadthFirstSearch(graph, start) {
  const queue = [start];

  while(queue.length > 0) {
    const current = queue.shift();
    const row = current.split(' ')[0];
    const column = current.split(' ')[1];
    const node = document.querySelector(`.node[row="${row}"][column="${column}"]`);

    if (node.classList.contains('visited') || node.classList.contains('blocked')) continue;

    if (node.classList.contains('finish')) break; 

    await sleep(1);
    if (!node.classList.contains('start')) {
      node.classList.add('visited');
    }
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}


function showPathBFS(queue) {
  queue.forEach((coord) => {
    const parts =  coord.split(' ');
    const row = parts[0];
    const column = parts[1];
    document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.add('path');
  })
}