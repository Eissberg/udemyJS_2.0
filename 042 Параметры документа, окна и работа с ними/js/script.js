'use strict';

//document, window, screen
const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width1 = box.clientWidth;
const height1 = box.clientHeight;

const width2 = box.offsetWidth;
const height2 = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width,' , ',height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
}); 

//js координаты в верхнем левом углу отчет 0,0.
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);
//при помощи этого метода можно ролучить стили псевдоэлементов

//не путать с инлайн стилями, которые записуются в код и имеют больший приоритет

//для  документа
//console.log(document.clientHeight) работать не будет, нужно писать:
console.log(document.documentElement.scrollTop);

//в консоле браузера можно набрать: document.documentElement.scrollTop = 0; и это вернет страницу на начало

//для window
//в консоле браузера можно набрать: window.scrollBy(0, 400); и это опустит страницу на 400 пикселей вниз от текущего положения

//в консоле браузера можно набрать: window.scrollTo(0, 400); и это опустит страницу на 400 пикселей вниз от всей страницы