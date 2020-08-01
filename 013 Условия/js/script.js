"use strict";

if (4 == 9) {
    console.log("Ok");
} else {
    console.log("Error");
}

// const num = 50;

// if (num < 49) {
//     console.log("error");
// }  else if (num > 100) {
//     console.log|("many");
// }  else {
//     console.log("Ok");
// }

// (num === 50) ? console.log("Ok") : console.log("error");

const num = 150;

switch (num) {      // проверка только на строгое соответствие
    case 49: 
        console.log("error");
        break;
    case 100:
        console.log|("many");
        break;
    case 50:
        console.log("Ok");
        break;
    default:
        console.log("f..k");
        break;
}       


