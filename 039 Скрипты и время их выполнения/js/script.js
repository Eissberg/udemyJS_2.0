'use strict';
// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello');


// const timerId = setTimeout(logger, 2000); //функция вызовется после таймаута
// function logger() {
//     console.log('text');
// }



// const timerId = setTimeout(logger, 2000); //функция вызовется после таймаута

// clearInterval(timerId);

// function logger() {
//     console.log('text');
// }


// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {   //рекурсивный SetTimeout будет выполняться по окончании отрабоки
//     timerId = setInterval(logger, 500); //если функция будт выполняться больше чем сет таймаут, то он будет считать  
// });                                     //что время уже прошло и немедженно запустит повторное выполнение. Пример ниже
                                         
// function logger() {
//     if (i == 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log("Hello");              //пример
//     id = setTimeout(log, 500);
// });

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   const id = setInterval(frame, 10);
   function frame() {
       if (pos == 300) {
           clearInterval(id);
       } else {
           pos++;
           elem.style.top = pos + "px";
           elem.style.left = pos + "px";
       }
   }
}

btn.addEventListener('click', myAnimation);   