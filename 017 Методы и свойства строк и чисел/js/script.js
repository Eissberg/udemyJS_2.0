"use strict";

const str = "test";
const arr = [1, 2, 5];

// console.log(str.length);
// console.log(arr.length);

// console.log(str[2] = 'd'); // wrong

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //вхождение строки
console.log(fruit.indexOf("q"));

const logg = "Hello world";

// console.log(logg.slice(6, 11)); //обрезается  - до  - не включая     //вырезать строку
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11)); //аналогичен, разница лиш в том, что не поддерживает отриц значения

// console.log(logg.substr(6, 11)); //во втором аргументе указываем сколько символов нужно вырезать

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); //приведение к числу - целому
console.log(parseFloat(test)); //приведение к числу дробному