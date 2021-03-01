"use strict";

alert("Let's start it!");

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a,
//     b;

// for (let i = 0; i < personalMovieDB.count; i++) {
//     a = prompt("Один из последних просмотренных фильмов?", "");
//     b = +prompt("На сколько оцените его?", "");

//     personalMovieDB.movies[a] = b;
// }

//       console.log(personalMovieDB);

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько оцените его?", "");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);