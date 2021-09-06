'use strict';

const inputHrn = document.querySelector('#hrn'),
      inputUsd = document.querySelector('#usd');

inputHrn.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);   Состав запроса
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send()  ;

    // request.addEventListener('readystatechange', () => {         // через readystatechange
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputHrn.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = "Something goes wrong...";
    //     }
    // });

    request.addEventListener('load', () => {         // через load
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputHrn.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Something goes wrong...";
            }
        });



    //СВОЙСТВА ЗАПРОСА

    // status
    // statusText
    // response
    // responseText
    // readyState

    // СОБЫТИЯ ОБЬЕКТА

    //readystatechange\
    //load
});