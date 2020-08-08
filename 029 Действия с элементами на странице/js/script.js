'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

    //   wrapper = document.querySelector('.wrapper'),
    //   hearts = wrapper.querySelectorAll('.heart'),
    //   oneHeart = wrapper.querySelector('.heart');
      
//console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';


// btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//css текст
// let num = 300;
// box.style.cssText = `background-color: blue; width: ${num}px`;

//обработка елеиентов

//цикл
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

//forEach
hearts.forEach(item=>{
    item.style.backgroundColor = 'black';
});

//методы для работы с елементами страницы
 const div = document.createElement('div');
 const text = document.createTextNode('Тут');

div.classList.add('black');

//вст в кон, вст после, удал или замен, но только по отн к другому обьекту

//современные методы для работы со страницей

//append
// document.body.append(div);
// document.querySelector('.wrapper').append(div);

//prepend
// wrapper.prepend(div);

//before and after
//hearts[0].before(div);
//hearts[0].after(div);

//remove
//circles[0].remove();

//replace with
// hearts[0].replaceWith(circles[0]);

//УСТАРЕВШИЕ КОНСТРУКЦИИ
//appendChild
wrapper.appendChild(div);

//insertBefore
//wrapper.insertBefore(div, hearts[0]);

//removeChild
//wrapper.removeChild(hearts[1]);

//replaceChild
// wrapper.replaceChild(circles[0], hearts[0]);

//добавлять текст в элементы
//innerHTML

// div.innerHTML = 'Hello!';
div.innerHTML = "<h1>Hello!</h1>";

//div.textContent = 'Hello';  //работате только с текстом

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

