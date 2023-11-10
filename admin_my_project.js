
function deleteRow(r) {
    i=r.parentNode.parentNode.rowIndex;
    let text = "Press a OK for Delete Project!";
    if (confirm(text) == true) {
        document.getElementById("maintable").deleteRow(i);
    } else {
        text = "You canceled!";
    }
}
