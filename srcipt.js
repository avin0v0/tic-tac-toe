let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rstbtn");
let newgame = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcon");
let msg = document.querySelector('#msg');
let cnt=0;
//turn
let turn0 = true;

const winPat = [
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
        console.log("box was clicked");
        cnt+=1;
        if(turn0){
            box.innerText = "O";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showDrw = () =>{
    msg.innerText = `OOPs Game Drawn`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const showWin = (winner) =>{
    msg.innerText = `Make some noise for Player ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const resetGame = () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const checkwinner = () =>{
    for(let pat of winPat){

        let pos1Val = boxes[pat[0]].innerText;
        let pos2Val = boxes[pat[1]].innerText;
        let pos3Val = boxes[pat[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWin(pos1Val);    
            }
            else if(cnt>=9){
                console.log("draw");
                showDrw();
            }
                
        }

    }
}

newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);