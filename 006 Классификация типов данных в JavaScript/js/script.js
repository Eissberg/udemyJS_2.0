"use strict";

//8 типов данных

//null - не существует
//undefined - существует, но значения нет
//Symbol - симфол
//BigInt - большие числа, больше чем 2 в 53 мстепени


//infinity  - бесконечность при деленим на 0, NaN - не число;


//object - коллекция данных

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};   //данные(свойства) и действия(методы)

console.log(obj.name);
console.log(obj["name"]);

//массив - это частный случай обьекта, в которых ключи заданы по умолчанию

let arr = ['plum.png','orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);