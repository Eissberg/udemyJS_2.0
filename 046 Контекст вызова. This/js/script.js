'use strict';

                // 1) Обычная функция: this = window, но если утсановлен use strict тогда undefined

// function showThis() {
//     console.log(this);
// }

// showThis();


                // 2) Контекст у методов обьекта - сам обьект


//  function showThis1(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b
//     }
//     console.log(sum());
// }

// showThis1(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// }

// obj.sum();

                // 3) this в конструкторах и классах - это новый экземпляр обьекта
 
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

                // 4)   Руяная привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

//bind - создает новую функуию связанную с определенным контекстом

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


const btn = document.querySelector('button');

// по старому оформлению функции
// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });

// через стрелочную функцию
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

//у стрелочной функции нет своего контекста вызова!!! Она всегода его берет у родителя!!!

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

// const double = a => a * 2; альтернативная запись сстрелочных функций