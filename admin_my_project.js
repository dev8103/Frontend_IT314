
function deleteRow(r) {
    i=r.parentNode.parentNode.rowIndex;
    let text = "Press a OK for Delete Project!";
    if (confirm(text) == true) {
        document.getElementById("maintable").deleteRow(i);
    } else {
        text = "You canceled!";
    }
}

function myFunction(filter) {
  var table, tr, td, i, txtValue;
  // input = document.getElementById("myInput");
  // filter = input.value.toUpperCase();
  filter=filter.toUpperCase();
  if(filter=="SHOW ALL"){
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