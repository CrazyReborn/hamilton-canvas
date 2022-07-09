import { drawArray } from "../canvas.js";

export async function mergeSort(nodeList, b, end) {
  if (nodeList.length < 2) return nodeList;
  let midleIndex = ~~(nodeList.length / 2);

  let leftArray = nodeList.slice(0, midleIndex);
  let rightArray = nodeList.slice(midleIndex);

  await mergeSortOnNodeList(leftArray, b, midleIndex);
  await mergeSortOnNodeList(rightArray, midleIndex, end);  

  await mergeOnNodeList(leftArray, rightArray, nodeList);

  visualise(nodeList, b, end);
  
  return nodeList;
}