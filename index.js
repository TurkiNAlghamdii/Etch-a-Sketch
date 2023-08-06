const container = document.getElementById("container");
const body = document.querySelector("body");
const div = document.createElement("div");

const btn = document.createElement("button");
btn.innerText = "Your choice!";
div.appendChild(btn);

body.appendChild(div).className = "outsideDiv";

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = i + 1;
    container.appendChild(cell).className = "cells";
  }
}

const cells = document.querySelectorAll(".cells");

container.addEventListener("mouseover", (e) => {
  var target = e.target;

  if (target !== container) {
    target.classList.add("hoverOver");

    console.log("hi");
  }
});
container.addEventListener("mouseout", (e) => {
  var target = e.target;

  if (target !== container) {
    target.classList.remove("hoverOver");
  }
});

let choice;
btn.addEventListener("click", () => {
  container.innerHTML=""
  for(let i =0;i<3;i++){
  choice = parseInt(prompt("Number of squares per side:(max 100)"));
  if(choice>100){
    continue
  }
  }
  makeGrid(choice, choice);
  
});
