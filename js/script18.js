"use strict";

let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмв вы уже посмотерил?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмв вы уже посмотерил?', '');
//     }
// }

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмв вы уже посмотерил?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмв вы уже посмотерил?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');

            if (a == '' || a == null || a.length > 50 || b == '' || b == null || isNaN(b)) {
                alert("В одном из вопросов вы ввели некорректные данные, либо не ввели совсем.");
                i--;
            } else {
                personalMovieDB.movies[a] = b;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        }
    },
    showMyDB: function (isPrivate) {
        if (!isPrivate) {
            console.log(personalMovieDB);
        } else {
            console.log('Error. DataBase is private');
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Введите любимые жанры через запятую`).toLowerCase();
            if (genre === '' || genre === null) {
                alert("Вы ввели некорректные данные или не ввели совсем.");
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
            }
        }
        personalMovieDB.genres.sort().forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });


        // for (let i = 0; i < 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        //     if (genre === '' || genre === null) {
        //         i--;
        //     } else { 
        //         personalMovieDB.genres[i] = genre.toLowerCase();
        //     }
        // }

        // personalMovieDB.genres.sort().forEach((item, i) => {
        //     console.log(`Любимый жанр №${i + 1} - это ${item}`);
        // });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.toggleVisibleMyDB();

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', '');

//     while (a == '' || a == null || a.length > 50) {
//         a = prompt('Один из последних просмотренных фильмов?', '');
//     }

//     let b = prompt('На сколько оцените его?', '');

//     while (b == '' || b == null || isNaN(b)) {
//         b = prompt('На сколько оцените его?', '');
//     }

//     personalMovieDB.movies[a] = b;
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Один из последних просмотренных фильмов?', '');

//         while (a == '' || a == null || a.length > 50) {
//             a = prompt('Один из последних просмотренных фильмов?', '');
//         }

//         let b = prompt('На сколько оцените его?', '');

//         while (b == '' || b == null || isNaN(b)) {
//             b = prompt('На сколько оцените его?', '');
//         }

//         personalMovieDB.movies[a] = b;
//     }
// }

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != '' && a != null && a.length < 50 && b != '' && b != null) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     }
// }

// if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// }

// function showMyDB(isPrivate) {
//     if (!isPrivate) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('Error. DataBase is private');
//     }
// }

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
//     }
// }
// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB(personalMovieDB.privat);



























//#1

// let x = 5;
// alert(x++);

//#2

// let res = [] + false - null + true;
// console.log(res);

//#3

// let y = 1,
//     x = y = 2;

// console.log(x);

//#4

// let res = [] + 1 + 2;
// console.log(res);

// alert( "1"[0] );

// console.log(2 && 1 && null && 0 && undefined);

// let a,
//     b;

// if (!!( a && b ) === (a && b)) {
//     console.log('yes');
// }   else {
//     console.log('no');
// }

// console.log(typeof(!!( 1 && 2 )));

// alert( null || 2 && 3 || 4 );

// const a = [1, 2, 3],
//       b = [1, 2, 3];

// console.log(a == b);

// alert( +"Infinity");

// console.log("Ёжик" > "яблоко");

// console.log(0 || "" || 2 || undefined || true || false);