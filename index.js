const boxes = document.querySelectorAll(".box");
let turn = 1;
let valid = true;
let hover = true;
if (hover == true) {
  for (const box of boxes) {
    box.addEventListener("mouseover", (event) => {
      if (turn == 1 && valid==true) {
        event.target.classList.add("dot_hv");
        box.innerText="O"
      } else if (turn == 2 && valid == true) {
        event.target.classList.add("cross_hv");
        box.innerText="X"
      }
    });
    box.addEventListener("mouseleave", (event) => {
      if (valid == true) {
        event.target.classList.remove("dot_hv");
        event.target.classList.remove("cross_hv");
        box.innerText = "";
      }
    });
  }
}
function choose(Id){
let clss;
if(turn==1){
  clss="dot"
} 
else if(turn==2){
clss="cross"
}
let block = document.getElementById(Id);
block.classList.add(clss);
block.classList.remove("box");
}
function reset(){
  for (const box of boxes) {
    box.classList.remove("cross");
    box.classList.remove("dot");
    box.classList.add("box");
  }
}



