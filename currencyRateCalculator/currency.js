
function inrToUsd(){
    let inr=document.getElementById("rupee").value;
    let usd = inr/84;

    document.getElementById("result").innerHTML= usd + " Dollars";
}

function usdToInr(){
    let usd=document.getElementById("rupee").value;
    let inr = usd*84;

    document.getElementById("result").innerHTML= inr + " Rupees";
}