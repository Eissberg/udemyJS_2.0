"use strict";

// alert('Hello!');  //способ 1


// const resul = confirm("Вы здесь?");
// console.log(resul);  //вопрос к пользователю


// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));    //собирает данные, возвращает строку

// //вся информация от пользователя приходит как строка
// // измекнить можно через +

// console.log(answer + 5); // вернет строку + строку "5"


const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers);
console.log(typeof(answers));
console.log(typeof(null)); //вернет тип обьект