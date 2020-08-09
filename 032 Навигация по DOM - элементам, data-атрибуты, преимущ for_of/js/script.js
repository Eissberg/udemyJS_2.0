'use strict';

'use strict';

// console.log(document.body);
// console.log(document.documentElement);

//childNotes - получаем все ноды(узлы) внутри этого родителя
console.log(document.body.childNodes);

//получить первого или последнего ребенка родителя firstChild, lastChild
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

//команды для получения родителя, соседей и детей для любого элемента
// console.log(document.querySelector('#current').parentNode.parentNode);

// //дата атрибуты - новый стандарт - для идентификации элементов

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

//Перебрать всех childNodes избавившишь от текстовых нод
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}