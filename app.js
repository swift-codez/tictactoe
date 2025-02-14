let boxes = document.querySelectorAll(".boxx");
let msgContainer = document.querySelector(".msg-container");
let reset = document.querySelector("#new-btn");
let turno = true;
let count=0;





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

const newgame = () => {
    for( let box of boxes ) {
        box.innerText="";
        box.disabled = false ;
    }
    turno = true;
    count = 0;
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true ;
    }
};
const showWinner = (win) => {
    msg.innerText = `Congratulations , The Winner is ${win}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const iswinner = () => {

    for (let combination of winPatterns) {

        let pos1 = boxes[combination[0]].innerText;
        let pos2 = boxes[combination[1]].innerText;
        let pos3 = boxes[combination[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        }
        else {
            box.innerText = "X";
            turno = true;
        }
    
        box.disabled=true;
        count++;

        let winner = iswinner();

        if (count === 9 && !winner) {
            gameDraw();
        }
    })
    
});

reset.addEventListener("click", () => {
    newgame();
});




