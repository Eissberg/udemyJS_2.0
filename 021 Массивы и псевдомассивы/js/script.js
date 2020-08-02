"use strict";

// const arr = [1, 2, 3, 6, 8];

//методы для работы с концом массива

// arr.pop();      //удаление последнего элемента
// arr.push(6);    //добавление элемента в конец массива

//методы для работы с началом массива

// arr.shift       //удаление первого элемента
// arr.unshift     //добавление элемента в начаало массива

//перебор элементов массива

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внути масиива ${arr}`);
// });      //Перебор массива через метод forEach - пробегат по всеми элементам и применяет к каждому внутреннюю функцию
// console.log(arr);
                        
// const str = prompt("","");       //split - на основании сироки формируем массив
// const products = str.split(", ");
// console.log(products);

                       
// console.log(products.join('; '));  //join - на основании массива формируем строку

// products.sort();
// console.log(products.join('; ')) //sort - сортирует массив+

const arr = [2, 13, 26, 8, 10];
arr.sort();
console.log(arr);

function compareNum(a, b){ // Сортировка по возрастанию
    return a - b;
}

arr.sort(compareNum);
console.log(arr);

// Псевдо массив
// элементы страницы работают через псевдо массивы, но для них нет никаких методов