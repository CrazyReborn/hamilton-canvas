import { drawArray } from '../canvas.js';
import { sleep } from "../sleep.js";

export async function quickSortEnd(array, start, end) {
  if (start < end) {
    let pivot = array[end];

  let i = start;
  let j = i - 1;

  while(i < end) {
    if (array[i] < pivot) {
      j++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    await sleep(11);
    drawArray(array, array[end]);
    i++
  }
  j++;
  let temp = array[end];
  array[end] = array[j];
  array[j] = temp;
  await sleep(11);
  drawArray(array, array[j]);
  await quickSortEnd(array, start, j - 1);
  await quickSortEnd(array, j + 1, end);
  }
  await sleep(11);
  drawArray(array, -1)
}