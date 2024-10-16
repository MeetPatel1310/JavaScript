
// let secondNum = document.getElementById("user").value;
// let add = document.getElementById("addition");
// let sub = document.getElementById("substraction");
// let mul = document.getElementById("multiplication");
// let div = document.getElementById("division");


// function addition(){
//     let firstNum  = document.getElementById("user").value;

    
//     let result = firstNum+secondNum;
//     console.log(result)
// }
// function equalTo(){
    
// }

// if(num==1){
//     let result = firstNum + secondNum;
//     console.log(result);    
// }
// else if(num==2){
//     let result = firstNum - secondNum;
//     console.log(result);
// }
// else if(num==3){
//     let result = firstNum * secondNum;
//     console.log(result);
// }
// else if(num==4){
//     let result = firstNum / secondNum;
//     console.log(result);
// }
// else{
//     console.log("Invalid choice");
// }

function display(val){
    document.getElementById("user").value += val;
}


function ClearScreen(){
    document.getElementById("user").value = "";
}

function solve(){
     let x = document.getElementById("user").value
     let y = eval(x);
     document.getElementById("user").value = y;
     
}