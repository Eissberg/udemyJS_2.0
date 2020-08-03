"use strict";

//to String

//1) String

console.log(typeof(String(null)));

//2) Конкатинация

console.log(typeof(5 + ""));    //при сложении со строкой - получается строка

// пример

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//to Number

//1) Number

console.log(typeof(Number('4')));

//2)    Унарный плюс

console.log(typeof(+'4'));

//3)

console.log(typeof(parseInt('14px', 10)));

//пример

let answ = +prompt("Hello", '');

//To boolean

//1) Нативное преобразование
//пустота или null, 0, '', Undefined, NaN всегда будут ложью

let swither = null;

if (swither) {
    console.log('Working...');
}

swither = 1;

if (swither) {
    console.log('Working...');
}

//2) Boolean

console.log(typeof(Boolean('4')));

//3) !!

console.log(typeof(!!'4'));