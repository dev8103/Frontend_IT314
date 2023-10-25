'use strict';

const menu = document.querySelector('.menu');
const close= document.querySelector('.close');

menu.addEventListener('click',function(){
    const box1=document.querySelector('.box1');

    console.log('menu');

        box1.style.display='block';
        close.style.display='block';
        menu.style.display='none';


});

close.addEventListener('click',function(){
    const box1=document.querySelector('.box1');

    console.log('close');


    box1.style.display='none';
    close.style.display='none';
    menu.style.display='block';

});