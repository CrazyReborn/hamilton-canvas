import { sleep } from "../sleep.js";
import { drawArray } from "../canvas.js";

export async function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let x = i;
    while (x > 0 && array[x - 1] > array[x]){
      let temp = array[x];
      array[x] = array[x - 1];
      array[x - 1] = temp;
      x--;
      await sleep(5);
      drawArray(array, x);
    }
  }
  await sleep(5);
  drawArray(array, -1);
}