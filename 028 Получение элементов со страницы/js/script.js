"use strict";

// getElementById
const box = document.getElementById('box');
console.log(box);

//getElementsByTagName
const btns = document.getElementsByTagName('button');
//const btns = document.getElementsByTagName('button')[1]; // получить один элемент
console.log(btns[1]);
console.log(btns); //получаем псевдомасив элементов

//getElementsByClassName
const circles = document.getElementsByClassName('circle');
console.log(circles);

//querySelectorAll
const hearts = document.querySelectorAll('.heart');
//console.log(hearts);
hearts.forEach(item =>{
    console.log(item);
});

//querySelector
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);