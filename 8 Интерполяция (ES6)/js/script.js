"use strict";

 const category = 'toys';

 console.log('https://someurl.com/' + category); //старая версия JS

 console.log('https://someurl.com/' + category + '/' + '4'); // нкжно получить

 console.log(`https://someurl.com/${category}/4`); //только с косыми кавычками

 const user = 'Eugen';

 alert(`Привет, ${user}`);