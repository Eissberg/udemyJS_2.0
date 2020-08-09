'use strict';

//1-й способ: назначить обработчик прямо в атрибуте html страницы
// <button onclick="alert('click')" id="btn">Нажми меня</button>

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

//2-й способ - использовать свойства DOM дерева для событий
//оторваный от жизни 
// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second Click');
// };
//нкжно переделать в новый формат:

//3-й способ - addEventListener removeEventListener
// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

//работа с event
// btn.addEventListener('mouseenter', (event) => {     //первым аргументом колбек функции всегда будет Event
//     // console.log('mouse enter');
//     console.log(event);
//     console.log(event.target);
//     event.target.remove();
// });

//удаление обработчика событий - удаление через функцию delete

// let i = 0;
// const deleteElement = (event) => {
//     console.log(event.target);
//     //event.target.remove();
//     i++;
//     if (i==1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);     //первым аргументом колбек функции всегда будет Event

//всплытие событий

const deleteElement = (event) => {
    console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event.type);
};

// btn.addEventListener('click', deleteElement);     //первым аргументом колбек функции всегда будет Event
// overlay.addEventListener('click', deleteElement);

//возможность отменять стандартные обработчики событий

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

//навесить функцию на три элемента
//почучить псевдо массив, перебрать все элементы изменяя их

// btns.forEach (btn => {
//     btn.addEventListener('click', deleteElement);  
// });

//addEventListener - третий параметр -- опции

btns.forEach (btn => {
        btn.addEventListener('click', deleteElement, {once: true});  
    });