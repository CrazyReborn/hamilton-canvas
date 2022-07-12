import { sleep } from '../sleep.js';

export async function deapthFirstSearch(graph, start, finish) {
  const stack = [start];
  const path = [];

  while(stack.length > 0) {
    const current = stack.pop();
    const row = current.split(' ')[0];
    const column = current.split(' ')[1];
    if (document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('visited')) continue;
    if (document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('finish')) break
    await sleep(50);
    document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.add('visited');
    // await sleep(50);
    // document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.remove('visited');
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  
}