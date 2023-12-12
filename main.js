addEventListener("DOMContentLoaded", () => {
  // loading
  document.querySelector(".loading").style.display = "none";

    const cellsTab = [];

  //   creating scene
  const scene = document.querySelector(".scene");
  const createCell = (parent) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    parent.appendChild(cell);
    cell.addEventListener('mousemove', () => {
      if(checkForMouseDown()){
        cell.style.background = 'transparent'
      }
    });
    cell.addEventListener('mousedown', () => {
        cell.style.background = 'transparent'
    })
    cellsTab.push(cell)
  };
  const createScene = () => {
    for (let i = 0; i < 47; i++) {
      const rowNode = document.createElement("div");
      rowNode.classList.add("row");
      scene.appendChild(rowNode);
      for (let i = 0; i < 95; i++) {
        createCell(rowNode);
      }
    }
  };
  //   mechanics
  let mouseDown = 0;
  const checkForMouseDown = () => {
    window.onmousedown = () => {
      ++mouseDown;
      
    };
    window.onmouseup = () => {
      --mouseDown;
    };
    return mouseDown;
  };
  createScene();
});
