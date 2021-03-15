'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Гарри Поттер"
        ]
    };

    const promoAdvImg = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector(".promo__genre"),
          promoInteractiveList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          addCheckbox = addForm.querySelector('[type = "checkbox"]');

    const addFilm = function(form, input, arr, checkbox) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            let newFilm = input.value.toUpperCase();

            if (newFilm) {
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substr(0, 21)}...`;
                }
                arr.push(newFilm);
            }
            if (checkbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            form.reset();

            makeFilmList(promoInteractiveList, movieDB.movies);
        });
    };

    const advRemove = function () {
        promoAdvImg.forEach((adv) => {
            adv.remove();
        });
    };

    const makeChanges = function () {
        promoGenre.textContent = 'драма';
        promoBg.style.backgroundImage = 'url(img/bg.jpg)';
    };

    const arrSort = function (arr) {
        arr.sort();
    };

    const makeFilmList = function (parent, arr) {
        parent.innerHTML = '';

        arrSort(arr);

        arr.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                arr.splice(i, 1);

                makeFilmList(promoInteractiveList, movieDB.movies);
            });
        });

    };

    advRemove();
    makeFilmList(promoInteractiveList, movieDB.movies);
    makeChanges();
    addFilm(addForm, addInput, movieDB.movies, addCheckbox);
});