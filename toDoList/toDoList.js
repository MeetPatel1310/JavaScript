function openform(){
    document.getElementById("form").style.display="block";

}
function closeform(){
    document.getElementById("form").style.display="none";
}

function addTask(){
    document.getElementById("form").style.display="none";
    let name = document.getElementById("name").value;
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;
    let date = document.getElementById("date").value;

    let transaction=JSON.parse(sessionStorage.getItem("items"));
    if(transaction==null){
        transaction=[];
    }

    transaction.push({
        name: name,
        task:task,
        priority:priority,
        date:date
    });
    sessionStorage.setItem("items",JSON.stringify(transaction));
    console.log(JSON.parse(sessionStorage.getItem("items")));

    let tbody=document.getElementById("tbody");

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    transaction.forEach(e => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.innerHTML = e.name
        td2.innerHTML = e.task;
        td3.innerHTML = e.priority;
        td4.innerHTML = e.date;
        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        tbody.appendChild(row);
        
    });

}