"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// while (numberOfFilms == 0) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }

console.log(numberOfFilms);



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if ((personalMovieDB["count"] <= 10) && (personalMovieDB["count"] >= 0)) {
    alert('Просмотрено довольно мало фильмов.');
} else if ((personalMovieDB["count"] > 10) && (personalMovieDB["count"] <= 30)) {
    alert("Вы классический зритель.");
} else if (personalMovieDB["count"] > 30) {
    alert("Вы киноман.");
} else {
    alert("Произошла ошибка.");
}

let a,
    b,
    i = 0;

//while

while (i < 2) {
    a = prompt("Один из последних просмотренных фильмов?", "");
        while (a == '' || a == null || a.length > 50 ) {
            a = prompt("Один из последних просмотренных фильмов?", "");
        }

    b = +prompt("На сколько оцените его?", "");
        while (b == 0) {
            b = +prompt("На сколько оцените его?", "");
        }

    personalMovieDB.movies[a] = b;
    
    i++;
} 

//do while

// do {
//     a = prompt("Один из последних просмотренных фильмов?", "");
//         while (a == '' || a == null || a.length > 50 ) {
//             a = prompt("Один из последних просмотренных фильмов?", "");
//         }

//     b = +prompt("На сколько оцените его?", "");
//         while (b == 0) {
//             b = +prompt("На сколько оцените его?", "");
//         }

//     personalMovieDB.movies[a] = b;
    
//     i++;
// } while (i < 2);

//for

// for (let i = 0; i < 2; i++) {
//     a = prompt("Один из последних просмотренных фильмов?", "");
//         while (a == '' || a == null || a.length > 50 ) {
//             a = prompt("Один из последних просмотренных фильмов?", "");
//         }

//     b = +prompt("На сколько оцените его?", "");
//         while (b == 0) {
//             b = +prompt("На сколько оцените его?", "");
//         }

//     personalMovieDB.movies[a] = b;
// }

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = +prompt("На сколько оцените его?", "");

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);

      // let a,
//     b;

// for (let i = 0; i < 2; i++) {
//     a = prompt("Один из последних просмотренных фильмов?", "");
//     b = +prompt("На сколько оцените его?", "");

//     personalMovieDB.movies[a] = b;
// }

//       console.log(personalMovieDB);
