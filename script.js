function addLine(x, y) {
  console.log(x);
  for (i = 0; i < x; i++) {
    const container = document.querySelector("#grid");
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (j = 0; j < y; j++) {
      const box = document.createElement("div");
      let height = 600 / x;
      console.log(x);
      console.log(height - 2 + "px");
      box.style.height = height - 2 + "px";
      let width = 600 / y;
      console.log(width);
      box.style.width = width - 2 + "px";
      row.appendChild(box);
    }
  }
}

function mouseOver() {
  const parent = document.querySelectorAll(".row div");
  console.log(parent);
  for (const p of parent) {
    p.addEventListener("mouseenter", () => {
      p.style.backgroundColor = "purple";
    });
  }
}

function showButton() {
  const container = document.querySelector("#container");
  const button = document.createElement("button");
  button.innerText = "Shake Etch-a-Sketch";
  button.addEventListener("click", givePromptWidth);
  container.appendChild(button);
}

function givePromptWidth(width) {
  console.log("it works!");
  let y = Math.min(prompt("Input Height"), 100);
  console.log(y);
  console.log("it works!");
  let x = Math.min(prompt("Input Width"), 100);
  console.log(x);

  removeGrid();
  addLine(x, y);
  mouseOver();
}

function removeGrid() {
  let selector = document.getElementById("grid");
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}

showButton();
addLine(25, 25);
mouseOver();
