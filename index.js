const boxes = document.querySelectorAll(".box");
let turn = 1;
let valid = true;
let valid_p1 = true;
let valid_p2 = false;
for (const box of boxes) {
  box.addEventListener("mouseover", (event) => {
    if (turn == 1 && valid == true && valid_p1 == true && valid_p2 == false) {
      event.target.classList.add("dot_hv");
    } else if (
      turn == 2 &&
      valid == true &&
      valid_p2 == true &&
      valid_p1 == false
    ) {
      event.target.classList.add("cross_hv");
    }
  });
  box.addEventListener("mouseleave", (event) => {
    if (valid == true) {
      event.target.classList.remove("dot_hv");
      event.target.classList.remove("cross_hv");
    }
  });
}
function choose(Id) {
  let clss;
  let block = document.getElementById(Id);
  if (turn == 1) {
    clss = "dot";
    turn = 2;
    valid_p1 = false;
    valid_p2 = true;
  } else if (turn == 2) {
    clss = "cross";
    turn = 1;
    valid_p1 = true;
    valid_p2 = false;
  }
  block.classList.add(clss);
  block.classList.remove("box");
  block.ariaDisabled = true;
}
function reset() {
  for (const box of boxes) {
    box.classList.remove("cross");
    box.classList.remove("dot");
    box.classList.add("box");
  }
}
