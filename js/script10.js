"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if ((personalMovieDB["count"] <= 10) && (personalMovieDB["count"] >= 0)) {
        console.log('Просмотрено довольно мало фильмов.');
    } else if ((personalMovieDB["count"] > 10) && (personalMovieDB["count"] <= 30)) {
        console.log("Вы классический зритель.");
    } else if (personalMovieDB["count"] > 30) {
        console.log("Вы киноман.");
    } else {
        console.log("Произошла ошибка.");
    }
}

detectPersonalLevel();

let a,
    b;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        a = prompt("Один из последних просмотренных фильмов?", "");
            while (a == '' || a == null || a.length > 50 ) {
                a = prompt("Один из последних просмотренных фильмов?", "");
            }
    
        b = +prompt("На сколько оцените его?", "");
            while (b == 0) {
                b = +prompt("На сколько оцените его?", "");
            }
    
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function showMyDB(isPrivat) {
    if (!isPrivat) {
        console.log(personalMovieDB);
    } else {
        console.log("Error. DataBase is privet.");
    }
}

showMyDB(personalMovieDB["privat"]);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }

    console.log(personalMovieDB);
}

writeYourGenres();