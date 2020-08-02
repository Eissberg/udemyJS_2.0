"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

//Устаревший формат
// const John = {
//     health: 100
// };

//Новый формат
const John = Object.create(soldier);    //Новаый формат Object.create

//устаревший формат - не использовать
// John.__proto__ = soldier;

// console.log(John);          //свойство джона одно
// console.log(John.armor);    //благодаря прототипам, Джон наследует свойство armor
// John.sayHello();            //благодаря прототипам, Джон наследует метод у armor

//новый формат использования

Object.setPrototypeOf(John, soldier);   //Новаый формат Object.setPrototypeOf

John.sayHello();

