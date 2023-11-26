// if(document.getElementById("statusdetail").textContent=="In progress"){
//     document.querySelector(".statuscheck").style.display="flex";
// }
// else{
//     console.log(123);
//     document.querySelector(".statuscheck").style.display="none";
// }
function deleteRow(r) {
    i=r.parentNode.parentNode.rowIndex;
    let text = "Press a OK for Delete Project!";
    if (confirm(text) == true) {
        // document.getElementById("maintable").deleteRow(i);
    } else {
        text = "You cancelled!";
    }
}

document.querySelector(".statuschanger").addEventListener('click',()=>{
    if(document.querySelector("#statusdetail").textContent=="In progress"){
        document.querySelector(".confirmation").style.display="flex";
    }
})
document.querySelector(".confirmation-btn1").addEventListener('click',()=>{
    document.querySelector("#statusdetail").textContent="Completed"
        document.querySelector(".confirmation").style.display = "none";
    document.querySelector(".statuschanger").style.display = "none";
});
document.querySelector(".confirmation-btn2").addEventListener('click',()=>{
    document.querySelector("#statusdetail").textContent="In progress";
    document.querySelector(".confirmation").style.display="none";
});
