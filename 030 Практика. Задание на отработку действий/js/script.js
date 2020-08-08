/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const reclama = document.querySelectorAll('.promo__adv img'),
      bgImage = document.querySelector('.promo__bg'),
      genre = bgImage.querySelector('.promo__genre'),
      newGenre = document.createElement('div'),
      movieList =document.querySelector('.promo__interactive-list');

reclama.forEach(item =>{  
    item.remove();
});

//document.querySelector('.promo__genre').replaceWith('ДРАМА');

// newGenre.classList.add('promo__genre');
// newGenre.innerText = "ДРАМА";
// genre.replaceWith(newGenre);

genre.textContent = "ДРАМА";

// console.dir(bgImage);
// console.log(bgImage);
// console.log(newGenre);

// bgImage.style.cssText = 'background: url(../img/bg.jpg)';

bgImage.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";
movieDB.movies.sort();

// console.log(bgImage.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>   
    `;
});

// a = a + 1; a += 1;




