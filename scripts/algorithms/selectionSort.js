import { drawArray } from "../canvas.js";
import { sleep } from "../sleep.js";

export async function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdex = i;

    for (let i2 = i + 1; i2 < array.length; i2++) {
      if (array[i2] < min) {
        min = array[i2];
        minIdex = i2;
      }
    }
    let ref = min;
    array[minIdex] = array[i];
    array[i] = ref;
    await sleep(66);
    drawArray(array, i);
  }
  await sleep(66);
  drawArray(array, -1);
}