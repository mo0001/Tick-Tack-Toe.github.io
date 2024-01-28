const boxes = document.querySelectorAll(".box");
const res = document.querySelector(".result");
let valid = true;
let turn = 1;
let count = 0;
let valid_p1 = true;
let valid_p2 = false;
let win = false;
//feature hover over elements
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
//logic of Choosing move
function choose(Id) {
  let clss;
  let block = document.getElementById(Id);
  if (turn == 1 && valid_p2 == false && valid_p1 == true && valid == true) {
    clss = "dot";
    block.innerText = "O";
    turn = 2;
    valid_p1 = false;
    valid_p2 = true;
    block.classList.add(clss);
    block.classList.remove("box", "cross");
  } else if (
    turn == 2 &&
    valid_p1 == false &&
    valid_p2 == true &&
    valid == true
  ) {
    clss = "cross";
    block.innerText = "X";
    turn = 1;
    valid_p1 = true;
    valid_p2 = false;
    block.classList.add(clss);
    block.classList.remove("box", "dot");
  }
  block.setAttribute("disabled", true);
  if (turn == 1 && valid == true) {
    res.innerText = "O's Turn";
  } else if (turn == 2 && valid == true) {
    res.innerText = "X's Turn";
  }
}
// Logic of the game

const win_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const reset = document.querySelector(".reset");
for (const box of boxes) {
  box.addEventListener("click", () => {
    count++;
    const check_winner = () => {
      for (let pattern of win_pattern) {
        let p1_val = boxes[pattern[0]].innerText;
        let p2_val = boxes[pattern[1]].innerText;
        let p3_val = boxes[pattern[2]].innerText;
        if (
          p1_val != "" &&
          p2_val != "" &&
          p3_val != "" &&
          p1_val == p2_val &&
          p2_val == p3_val &&
          valid == true
        ) {
          res.innerText = `${p1_val} is winner`;
          valid = false;
          win = true;
          reset.innerText="New Game"
        }
        else if (count==9&& win==false){
          res.innerText="It's a tie"
          reset.innerText="New Game"
        }
      }
    };
    check_winner();
  });
}
