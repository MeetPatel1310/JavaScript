let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#newGame");
let reset = document.querySelector("#reset");
let win = document.querySelector(".winingMessage");
var turn0 = true; 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            // box.style.color="green";
            box.innerText = "O";
            box.style.color = "green";
            turn0 = false;
        }else{
            box.innerText = "X";
            box.style.color = "rgb(170, 50, 7)";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


let resetGame = () =>{
    turn0 = true;
    enableBoxes(); 
    
    box.style.color = "green"; 
}

let enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";   
        win.innerText = "";
        // win.innerText = "";

    }
}
let checkWinner = () =>{
    for(patterns of winPatterns){
        // console.log(patterns);
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        let position1Val= boxes[patterns[0]].innerText;
        let position2Val= boxes[patterns[1]].innerText;
        let position3Val= boxes[patterns[2]].innerText;
        
        if(position1Val != "" && position2Val != "" && position3Val != ""){
            if(position1Val === position2Val && position2Val === position3Val){
                console.log("winner", position1Val);

                if(position1Val=="O"){
                    win.innerText = `"winner is ${position1Val}"`;
                    win.style.color="green";
                }
                else{
                    win.innerText = `"winner is ${position1Val}"`;
                    win.style.color="orangered";
                }
                for(box of boxes){
                    box.disabled = true;
                }

            }
        }

    }
    
}

reset.addEventListener("click" , resetGame);
// newGame.addEventListener("click",newplay)
newGame.addEventListener("click" , resetGame);


