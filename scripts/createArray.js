import { drawArray } from "./canvas.js";

export default function createArray(numberOfElements) {
  console.log(numberOfElements);
  const mainArray = Array.from({ length: numberOfElements }, () => Math.floor(Math.random() * numberOfElements));
  drawArray(mainArray, -1);
}