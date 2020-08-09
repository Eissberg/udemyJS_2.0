/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          movieList = document.querySelector('.promo__interactive-list'),
          filmNameInput = document.querySelector('.adding__input'),
          favChekBox = document.querySelector('[type="checkbox"]'),
          newFilmButton = document.querySelector('.add').lastElementChild;
    
    
    const deleteReclam = (arr) => {
        arr.forEach((item) =>{  
            item.remove();
        });
    };
  
    const makeChanges = () => {
        genre.textContent = "ДРАМА";
        bgImage.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };   
       
    // console.log(filmNameInput);
    newFilmButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newFilm = filmNameInput.value;
            console.log(newFilm);
        if (favChekBox.checked) {   
            // console.dir(favChekBox.checked);
            console.log('Добавлен любимый фильм!');
        } 
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
    });

    
    function createMovieList(films, parent) {
        sortArr(films);
        parent.innerHTML = "";
        films.forEach((film, i) => {
            // for (let i = 0; film.length; i++) {
            //     if (i >= 21) {}
            // }
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>   
            `;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });

    }
    
    deleteReclam(reclama);
    makeChanges();
    movieList.innerHTML = "";
    createMovieList(movieDB.movies, movieList);
    // console.log(movieDB.movies);
});