'use strict';

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log("Start");
        // console.log(e.touches);
        console.log(e.TargetTouches);
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log("move");
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log("End");
    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});

//три главных свойства при работе на моб устройствах

//touches - кво касаний на экране (пальцев которые взаимодествуют с экраном)
//targetTouches - кво касаний на элементе (пальцев, которые взаимодействуют с обьектом)
//changedTouches - список пальцев, которые участвуют в текущем событии

