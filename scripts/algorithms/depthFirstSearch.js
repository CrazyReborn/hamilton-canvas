import { sleep } from '../sleep.js';

export async function depthFirstSearch(graph, start) {
  const stack = [start];

  while(stack.length > 0) {
    const current = stack.pop();
    const row = current.split(' ')[0];
    const column = current.split(' ')[1];
    if (document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('visited') ||
    document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('blocked')) continue;
    if (document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('finish')) return true;
    await sleep(22);
    document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.add('visited');
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }  
  return false;
}


export async function showPathDFS(graph, start) {

const stack = [start];

  while(stack.length > 0) {
    const current = stack.pop();
    const row = current.split(' ')[0];
    const column = current.split(' ')[1];
    if (document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('finish')) return true;
    if (document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('path')
    || document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('blocked')) continue;

    if(document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('visited')
        && !document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.contains('path')) {
      document.querySelector(`.node[row="${row}"][column="${column}"]`).classList.add('path');
      await sleep(11);
    }
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }  
  return false;
}