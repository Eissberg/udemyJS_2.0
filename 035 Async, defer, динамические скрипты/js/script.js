'use strict';

const p = document.querySelectorAll('p');
console.log(p);
//defer - говорит браузеру что нужно продолжать обрабатывать страницу и загружать скрипт в фоновом режиме 
//скрипты с defer никогда не блокируют страницу
//скрипты с defer всегда выполняються даже если DOM дерево уже готово
//если подключать несколько скриптов, то они будут подключаться последовательно

//async
//страница не ждет асинхронных скриптов содержимое просто открывается и обрабатывается
//скрипты становятся незавивсимыми друг от дурга и грузяться как только смогут


//динамически подключаемые скрипты. Ведут себя как async
// const script = document.createElement('script');
// script.src = 'js/test.js';
// document.body.append(script);

//изменить порядок выполнения при загрузке
// const script = document.createElement('script');
// script.src = 'js/test.js';
// script.async = false;
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");