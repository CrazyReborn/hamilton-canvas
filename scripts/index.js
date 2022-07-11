import createArray from "./createArray.js";
import { bubbleSort } from "./algorithms/bubbleSort.js";
import { selectionSort } from "./algorithms/selectionSort.js";
import { insertionSort } from "./algorithms/insertionSort.js";
import { mergeSort } from "./algorithms/mergeSort.js";
import { quickSortEnd } from './algorithms/quickSort.js';
import { drawArray } from "./canvas.js";

const range = document.querySelector('#range');
const select = document.querySelector('select');
const startBtn = document.querySelector('#start');
let algo = '';
let array = [];

(function main() {
  range.addEventListener('input', (e) => {
    array = createArray(e.target.value);
  });

  select.addEventListener('change', (e) => {
    algo = e.target.value;
  });

  startBtn.addEventListener('click', () => {
    switch (algo) {
      case 'selection-sort':
        selectionSort(array);
        break;
      case 'bubble-sort':
        bubbleSort(array);
        break;
      case 'insertion-sort':
        insertionSort(array);
        break;
      case 'merge-sort':
        mergeSort(array, 0, array.length - 1);
        break;
      case 'quick-sort-end':
        quickSortEnd(array, 0, array.length - 1);
    }
  });

  const canvas = document.querySelector('.visualizer');
  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight * 0.89;
    canvas.width = window.innerWidth * 0.9;
    drawArray(array, -1);
  });

})()