let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})


const descbox=document.querySelector(".description-box");

var totalRowCount = 0;
var rowCount = 0;
var table = document.getElementById("maintable");
var table = document.getElementById("maintable");
var rows = table.getElementsByTagName("tr");

for (var i = 0; i < rows.length; i++) {
    totalRowCount++;
    if (rows[i].getElementsByTagName("td").length > 0) {
        rowCount++;
    }
}
function showtask(row,btn){
    console.log(row);
    if(btn.textContent=="View"){
        descbox.style.display="flex";
    for(let j=1;j<=rowCount;j++){
            if(j==row)
            continue;
    const tablerow=document.getElementById(`tablerow${j}`);
    const btn2=tablerow.querySelector(".button-tag");
    btn2.textContent="View";
    }
    document.querySelector(".tasktitle1").textContent=`Task ${row}`;  
    btn.textContent="Hide";
    console.log(btn);
    }
    else{
        descbox.style.display="none";
        btn.textContent="View"; 
    }
}
 for(let j=1;j<=rowCount;j++){
    const tablerow=document.getElementById(`tablerow${j}`);
    const btn2=tablerow.querySelector(".button-tag");
    btn2.onclick=function() { console.log(tablerow); showtask(j,btn2);};
}


function myFunction(filter) {
    var table, tr, td, i, txtValue;
    // input = document.getElementById("myInput");
    // filter = input.value.toUpperCase();
    if(filter=="I"){
      filter="Pending";
    }
    if(filter=="C"){
      filter="Completed";
    }
    if(filter=="S"){
      filter="Submitted for review";
    }
    filter=filter.toUpperCase();
    if(filter=="SHOW ALL" || filter=='#'){
      filter="";
    }
    table = document.querySelector(".main-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  function getOption() {
    selectElement = document.querySelector('#select1');
    output = selectElement.value;
    myFunction(output);
}
  
