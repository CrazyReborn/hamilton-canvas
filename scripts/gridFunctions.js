export function createGrid(section) {
  for (let row = 0; row < 30; row++) {
    for (let column = 0; column < 50; column++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('row', row);
      newDiv.setAttribute('column', column);
      newDiv.classList.add('node');
      newDiv.classList.contains('start') ?
        newDiv.setAttribute('weight', 0) : newDiv.setAttribute('weight', 1);

      newDiv.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('start') || e.target.classList.contains('finish')) {
          dragged = e.target;
        }
      });

      newDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
      }, false);

      newDiv.addEventListener('drop', (e) => {
        if (dragged.classList.contains('start')) {
          dragged.classList.remove('start');
          e.target.classList.add('start');
          startNode = e.target;
        }

        if (dragged.classList.contains('finish')) {
          dragged.classList.remove('finish');
          e.target.classList.add('finish');
          finishNode = e.target;
        }

      });

      newDiv.addEventListener('dragend', (e) => {
        addDradSToMainNodes();
      })
      section.appendChild(newDiv);
    }
  }

  const divs = document.querySelectorAll('.node');
  divs.forEach((node) => {
    node.addEventListener('click', addWall, false);
  });
}

export function clearGrid(section) {
  for (let node of section.childNodes) {
    if (node.classList.contains('visited')
      || node.classList.contains('blocked')) {
      node.classList.remove('visited');
      node.classList.remove('blocked');
      node.classList.remove('path');
    }
  }
}

export function addWall(e) {
  if (e.target.classList.contains('start') || e.target.classList.contains('finish')) {
    return;
  }
  e.target.classList.add('blocked');
}