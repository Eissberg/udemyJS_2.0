"use strict";

// a = 15;
// console.log(a);   //проверка use Strict не даст отработать коду 

let number = 5;  //1-способ - изменяемая переменная

const leftBorderWidth = 1; //2-способ - не изменяемая переменная


console.log(name);
var name = "Eugen"; //3-способ - устаревший - существует еще до того, как используется и видна везде. 
// Let выдаст ошибку, var не выдаст.

// number = 10;
// console.log(number);

// leftBorderWidth = 10;
// console.log(leftBorderWidth);

const obj = {
    a:50
};

obj.a = 10;

console.log(obj);

{
    let result = 50;
}

console.log(result); //переменные обьявленные через Let - видны тольк овнутри скобок
