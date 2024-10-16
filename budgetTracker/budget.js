

function addTransaction(){
    const text = document.getElementById("text").value;
    const amount = document.getElementById("amount").value;
    let transaction=JSON.parse(sessionStorage.getItem("items"))
    if(transaction==null){
        transaction=[];
    }
    let type = "";
    if(amount>=0){
        type="income"
    }
    else{
        type="expense"
    }

    
    transaction.push({
        text: text,
        amount:amount,
        type: type
    });
    sessionStorage.setItem("items",JSON.stringify(transaction));
    console.log(JSON.parse(sessionStorage.getItem("items")));

    let sum=0;
    transaction.forEach((x) => {
        sum +=   parseInt(x.amount);
        
    });
    // console.log(sum);
    document.getElementById("totalBalance").innerHTML = sum;

    let li = document.createElement("li")
    let data = document.createTextNode(text + " " + amount);

    li.appendChild(data);
    document.getElementById("historyContent").appendChild(data);

    let income = 0;
    let expense = 0;

    transaction.forEach((x)=>{
        if(x.type=="income"){
            income += parseInt(x.amount);

        }
        else{
            expense += parseInt(x.amount);
        
        }


    })
    document.getElementById("income").innerHTML=income;
    document.getElementById("expense").innerHTML=expense;


}







// for(let i=0; i>=0;i++){
//     if(i==0){
//         addTransaction();
//     }
//     else{
//         updatetransaction();
//     }
// }
// function addTransaction(){
//    let  amount = Number(document.getElementById("amount").value);
//    let income=0;
//    let expense=0;
//    if(amount>=0){
//     income = amount;
    
//    }
//    else{
//     expense = amount;
    
//    }
//    let balance = income-expense;
//    document.getElementById("totalBalance").innerHTML = balance;
//    document.getElementById("income").innerHTML = balance;
// }

// let meet = () => {

// }

// ()=>{

// }