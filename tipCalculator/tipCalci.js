function calculate(){

    let amount = Number(document.getElementById("amount").value);
    let tip = Number(document.getElementById("tip").value);
    // console.log(typeof tip);

    tip = amount * tip / 100;

    let gst = amount * 18 / 100;

    let total = gst + tip + amount;

    document.querySelector(".amount").innerHTML  = "Amount:" + amount;
    document.querySelector(".tip").innerHTML = "Tip:" + tip;
    document.querySelector(".gst").innerHTML = "GST:" + gst;
    document.querySelector(".total").innerHTML = "Total:" + total;
}