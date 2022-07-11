import { drawArray } from "../canvas.js";
import { sleep } from "../sleep.js";

let temp = [];
export async function mergeSort(array, start, end) {
  if (start< end) {
    let mid = parseInt((start + end)/2);
    await mergeSort(array, start, mid);
    await mergeSort(array, mid + 1, end);
    await merge(array, start, end);
    //console.log(array);
  }
}

async function merge(array, start, end) {
  let mid = parseInt((start + end)/2);
  let iLeft = start,
      iRight = mid + 1,
      endLeft = mid,
      endRight = end;

  let iMain = start;

  while(iLeft <= endLeft && iRight <= endRight) {
    if (array[iLeft] < array[iRight]) {
      //console.log(`${array[iRight]} is bigger than ${array[iLeft]}`);
      temp[iMain++] = array[iLeft++];
    } else {
      //console.log(`${array[iLeft]} is bigger than ${array[iRight]}`);
      temp[iMain++] = array[iRight++];
    }
  }

  while(iLeft <= endLeft) {
    //console.log(`${array[iLeft]} is bigger than nothing`);
    temp[iMain++] = array[iLeft++];
  }

  while(iRight <= endRight) {
    //console.log(`${array[iRight]} is bigger than nothing`);
    temp[iMain++] = array[iRight++];
  }

  iMain = start;
  while(iMain <= end) {
    array[iMain] = temp[iMain++];
    await sleep(22);
    drawArray(array);
  }
 
}