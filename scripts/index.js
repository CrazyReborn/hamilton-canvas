import createArray from "./createArray.js";

const range = document.querySelector('#range');

(function main() {
  range.addEventListener('change', (e) => {
    console.log(e.target.value);
    createArray(e.target.value);
  })
})()