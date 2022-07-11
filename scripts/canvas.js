const canvas = document.querySelector('.visualizer');

canvas.height = window.innerHeight * 0.89;
canvas.width = window.innerWidth * 0.9;
const c = canvas.getContext('2d');

export function drawArray(array, x) {
  c.clearRect(0, 0, canvas.width, canvas.height)
  let widthElement = canvas.width * 0.9 / array.length;
  let heightPerOne = canvas.height * 0.9 / array.length;
  let xStart = (canvas.width - widthElement*array.length) / 2;
  let yStart = canvas.height;
  array.forEach((element, index) => {
    let colour = '#5eb1bf';
    if (index == x) {
      colour = '#042a2b';
    }
    drawElement(xStart, yStart, widthElement, heightPerOne, element, colour);
    xStart += widthElement;

  })
}

function drawElement(xStart, yStart, widthElement, heightPerOne, element, colour) {
  c.beginPath();
  c.moveTo(xStart, yStart);
  c.lineTo(xStart, yStart - (heightPerOne * element));
  c.lineTo(xStart + widthElement, yStart - (heightPerOne * element));
  c.lineTo(xStart + widthElement, yStart);
  c.lineTo(xStart, yStart);
  c.fillStyle = colour;
  c.fill();
  c.strokeStyle = '#fef9ef';
  c.stroke();
}