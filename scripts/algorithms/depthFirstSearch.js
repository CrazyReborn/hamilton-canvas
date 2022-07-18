import { sleep } from '../sleep.js';

export async function depthFirstSearch(graph, start) {
  const stack = [start];
  const path = [];

  while(stack.length > 0) {
    const current = stack.pop();
    const row = current.split(' ')[0];
    const column = current.split(' ')[1];

    const node = document.querySelector(`.node[row="${row}"][column="${column}"]`);

    if (node.classList.contains('visited') || node.classList.contains('blocked')) continue;

    if (node.classList.contains('finish')) {
      path.push(current);
      showPathDFS(path);
      return true;
    }

    await sleep(22);
    if (!node.classList.contains('start')) {
      node.classList.add('visited');
      path.push(current);
    }
    

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
      path.push(current);
    }
  }  
  return false;
}


export async function showPathDFS(path) {

const stack = path;
  while(stack.length > 0) {
    const current = stack.pop();
    const row = current.split(' ')[0];
    const column = current.split(' ')[1];

    const node = document.querySelector(`.node[row="${row}"][column="${column}"]`);

    if (node.classList.contains('start')) return true;
    if (node.classList.contains('path') || node.classList.contains('blocked')) continue;

    if(node.classList.contains('visited') && !node.classList.contains('path')) {
      node.classList.add('path');
      await sleep(11);
    }
  }  
  return false;
}