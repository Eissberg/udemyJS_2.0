"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",""),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
   

let filmName = prompt("Один из последних просмотренных фильмов?",""),
      filmPoint = prompt("На сколько его оцените?","");    

personalMovieDB.movies[filmName] = filmPoint;

filmName = prompt("Один из последних просмотренных фильмов?","");
filmPoint = prompt("На сколько его оцените?",""); 

personalMovieDB.movies[filmName] = filmPoint;

console.log(personalMovieDB);