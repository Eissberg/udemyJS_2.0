'use strict';

// const now = new Date();
// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20);
// const now = new Date(0);

// const now = new Date();
// //получение компонентов даты
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());  //день недели

// //есть комманды
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());

// //set вместо get

// const now1 = new Date();

// console.log(now1.setHours(18));
// console.log(now1);

const nowTest = new Date('2020-09-08'); //равнозначно
//  new Date.parse('2020-09-08');          //равнозначно
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);