"use strict";

// let a = 5,
//     b = a;

//     b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //в copy передается не сама структура, а передается ссылка на обьект obj

// copy.a = 10; 

// console.log(copy);
// console.log(obj);   //изменяя copy, мы изменяем и obj  

function copyObj(mainObj) {     //клонирование обьекта
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7, 
        y: 4
    }
};

// const newNumbers = copyObj(numbers); //поверхносная копия - первый уровень клонируется, ост ур вложенности - ссылки

// newNumbers.a = 10;
// newNumbers.c.x = 10;        //есть глубокие и поверхносные копии обьекта 


// console.log(newNumbers);
// console.log(numbers);

//object assignt - метод копирования обьектов

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); //создали независимую поверхнострую копию обьекта

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);




//копирование массива

const oldArray = ['a','b','c'];
// const newArray = oldArray; //в новом создасться ссылка на старый
const newArray = oldArray.slice();  //создасться копия старого массива в новом массиве

newArray[1] = 'adddaadad';
console.log(newArray);
console.log(oldArray);

//оператор разворота - спред оператор

const   video = ['youtube','vimeo','rutube'],
        blogs = ['wordpress','livejournal','blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

//разложение данных из массива для использования в функции

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

//es8 спред оператор

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};