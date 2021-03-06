export function createAdjacencyList(nodeList) {
  const graph = {};
  const maxRows = parseInt(nodeList[nodeList.length - 1].getAttribute('row'));
  const maxColumn = parseInt(nodeList[nodeList.length - 1].getAttribute('column'));
  //use 'row column' as property name;
  let row = 0;
  while(row < maxRows + 1) {
    for(let column = 0; column < maxColumn + 1; column++) {
      //find the current node
      const current = document.querySelector(`.node[row="${row}"][column="${column}"]`);
      const currentCoord = `${row} ${column}`;
      const edges = [];
      if (current == null) return graph;
      //find the adjacent ones
      const adjLeft = document.querySelector(`.node[row="${row}"][column="${column - 1}"]`);
      const adjBottom = document.querySelector(`.node[row="${row + 1}"][column="${column}"]`);
      const adjRight = document.querySelector(`.node[row="${row}"][column="${column + 1}"]`);
      const adjUp = document.querySelector(`.node[row="${row - 1}"][column="${column}"]`);
      
      if (Boolean(adjUp) /* && !graph.hasOwnProperty(`${row - 1} ${column}`) */) {
        // if (typeof graph[`${row - 1} ${column}`] != 'undefined' && graph[`${row - 1} ${column}`].includes(`${row} ${column}`)) {
        //   //do nothing
        // } else {
          edges.push(`${row - 1} ${column}`);
    }

      if (Boolean(adjRight) /* && !graph.hasOwnProperty(`${row} ${column + 1}`) */) {
      //   if (typeof graph[`${row} ${column + 1}`] != 'undefined' && graph[`${row} ${column + 1}`].includes(`${row} ${column}`)) {
      //     //do nothing
      //   } else {
          edges.push(`${row} ${column + 1}`);
      }

      if (Boolean(adjBottom) /* && !graph.hasOwnProperty(`${row + 1} ${column}`) */) {
        // if (typeof graph[`${row + 1} ${column}`] != 'undefined' && graph[`${row + 1} ${column}`].includes(`${row} ${column}`)) {
        //   //do nothing
        // } else {
          edges.push(`${row + 1} ${column}`);
      }

      if (Boolean (adjLeft) /* && !graph.hasOwnProperty(`${row} ${column - 1}`) */) {
        // if (typeof graph[`${row} ${column - 1}`] != 'undefined' && graph[`${row} ${column - 1}`].includes(`${row} ${column}`)) {
        //   //do nothing
        // } else {
          edges.push(`${row} ${column - 1}`);
        
      }

      graph[currentCoord] = edges;
    }
    row++;
  }

  return graph;
}