"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5"); //унарный плюс - плюсик, который ставиться перед чем-то

//инкремент и декремент

let incr = 10,
    decr = 10;

// incr++;
// decr--;

// ++incr;
// --decr;


console.log(++incr);
console.log(--decr);

console.log(5%2); //mod

console.log(2*4 == '8');  //равенство
console.log(2*4 === '8'); //строгое равенство

// &&  // И
// ||  // ИЛИ

const isChecked = true,
      isClose = false;

console.log(isChecked || isClose);   //вернет true если хотя бы один из аргументов true

//! - оператор отрцания

console.log(2 + 2 * 2 != 8); 