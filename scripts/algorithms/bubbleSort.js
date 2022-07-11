import { sleep } from '../sleep.js';
import { drawArray } from '../canvas.js';

export async function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length - i; x++) {
      if (array[x] > array[x + 1]) {
        let temp = array[x + 1];
        array[x + 1] = array[x];
        array[x] = temp;
      }
      await sleep(10);
      drawArray(array, x);
    }
  }
}
