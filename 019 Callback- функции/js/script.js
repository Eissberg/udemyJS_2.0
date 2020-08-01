"use strict";

function first () {
    //do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function leanJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

// leanJS("JavaScript", function(){
//     console.log("Я прошел этот урок!");
// });

//  ИЛИ

function done() {
    console.log("Я прошел этот урок!");
}

leanJS("JavaScript", done);