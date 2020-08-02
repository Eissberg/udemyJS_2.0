"use strict";

// const obj = new Object();

const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
       console.log("test"); 
    }
};

// console.log(options.name);

// //удаление свойства из обьета
// // delete options.name;

// console.log(options);

// перебор свойств обьета
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`Свойство ${key} имеет значение ${options[key][i]}`)
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//         counter++;
//     }
// }
// console.log(counter);

//свойства и методы обьекта

options.makeTest();
// console.log(Object.keys(options).length);

const {border, bg} = options.colors;    // деструктуризация обьекта - выбор вложенного обьета из основного обьекта
console.log(border);



