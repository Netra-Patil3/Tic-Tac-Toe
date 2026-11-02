let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turn_o = true; // it will track turn of O and X

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn_o) {
      box.innerText = "O";
      turn_o = false;
    } else {
      box.innerText = "X";
      turn_o = true;
    }
    box.disabled= true;
    checkWinner();
  });
});


const showWinner=(winner) =>{
  msg.innerText= `Congratulations, The winner is ${winner}`;
  msgContainer.classList.remove("hide");
  for(box of boxes){
    box.disabled=true;
  }
}
const checkWinner = () => {
  for(pattern of winPatterns){

    let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
          if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
          }
        }
        
      }
};

const resetGame=()=>{
  for(box of boxes){
    box.innerText="";
    box.disabled=false;
  }
  msgContainer.classList.add("hide");
}

newGamebtn.addEventListener("click",()=>{
  resetGame();
});

resetBtn.addEventListener("click",()=>{
  resetGame();
});