let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

const btn=document.querySelector(".button-tag");
const descbox=document.querySelector(".description-box");

btn.onclick=function() {showtask()};

function showtask(){
    if(btn.textContent=="view"){
    descbox.style.display="flex";
    btn.textContent="Hide";
    }
    else{
    descbox.style.display="none";
    btn.textContent="view"; 
    }
}