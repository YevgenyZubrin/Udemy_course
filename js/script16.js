"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function () {
        if ((personalMovieDB["count"] <= 10) && (personalMovieDB["count"] >= 0)) {
            console.log('Просмотрено довольно мало фильмов.');
        } else if ((personalMovieDB["count"] > 10) && (personalMovieDB["count"] <= 30)) {
            console.log("Вы классический зритель.");
        } else if (personalMovieDB["count"] > 30) {
            console.log("Вы киноман.");
        } else {
            console.log("Произошла ошибка.");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", "");
            while (a == '' || a == null || a.length > 50) {
                a = prompt("Один из последних просмотренных фильмов?", "");
            }

            let b = +prompt("На сколько оцените его?", "");
            while (b == 0) {
                b = +prompt("На сколько оцените его?", "");
            }

            personalMovieDB.movies[a] = b;
        }
    },
    showMyDB: function (isPrivat) {
        if (!isPrivat) {
            console.log(personalMovieDB);
        } else {
            console.log("Error. DataBase is privet.");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt("Введите любимые жанры через запятую.", "");
            if (genres == '' || genres == null) {
                console.log("Вы ввели некорректные данные или не ввели их совсем.");
                i--;
            } else {
                personalMovieDB.genres = genres.toLowerCase().split(', ');
            }

        }

        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });

        // for (let i = 0; i < 3; i++) {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "").toLowerCase();
        //     if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
        //         console.log("Вы ввели некорректные данные или не ввели их совсем.");
        //         i--;
        //     }
        // }
        // personalMovieDB.genres.sort();
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр #${i + 1} - это ${item}`);
        // });


        // for (let i = 0; i < 3; i++) {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        //     while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
        //         console.log("Вы ввели некорректные данные или не ввели их совсем.");
        //         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        //     }
        // }

        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр #${i + 1} - это ${item}`);
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

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();