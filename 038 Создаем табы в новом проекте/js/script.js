'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add('red', 'tratata'));      //Добавление класса
// console.log(btns[0].classList.remove('blue'));  //Удаление класса

// console.log(btns[0].classList.toggle('red'));   //тогл(добавление/удаление если нет/есть) класса

//contains - возвращает true/false если у обьекта есть/нет класса

// console.log(btns[1].classList.toggle('red'));
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

btns[0].addEventListener('click', () => {
        btns[1].classList.toggle('red');
});

// console.log(btns(0).className);

//делигирование, для размножение событий для всех элементов

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log('Hello!');        
    // }

    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('Hello!');        
    // }

    //гуглы любят

    if (event.target && event.target.matches('button.red')) {
        console.log('Hello!');        
    }

});

// btns.forEach(btn => {   //аналог при помощи перебора. не добавляет к новым кнопкам созданным пожже
//     btn.addEventListener('click', () => {
//         console.log('Hewllo!');
//     });
// }); 


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);



