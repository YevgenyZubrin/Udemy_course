'use strict';

// window.addEventListener('DOMContentLoaded', () => одно и то же


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    const promoAdvImg = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector(".promo__genre"),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        addInput = addForm.querySelector('.adding__input'),
        addCheckbox = addForm.querySelector('[type = "checkbox"]');
        // addSubmitBtn = document.querySelector('button');

    removeAdv();
    genreChange();
    bgImageChange();
    filmListOutput();

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        addFilm(filmListOutput);
    });

    // const deleteBtn = document.querySelectorAll('.delete');

    // deleteBtn.forEach((btn, i) => {
    //     btn.addEventListener('click', (event) => {
    //         event.preventDefault();

    //         deleteFilm(i, filmListOutput);
    //     });
    // });

    

    function genreChange() {
        promoGenre.textContent = 'драма';
    }

    function bgImageChange() {
        promoBg.style.backgroundImage = 'url(img/bg.jpg)';
    }

    function arraySorting() {
        movieDB['movies'].sort();
    }

    function addFilm(callback) {
        if (Boolean(addInput.value)) {
            if (addInput.value.length > 21) {
                addInput.value = `${addInput.value.substring(0, 22)}...`;
            }
            if (addCheckbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(addInput.value.toUpperCase());
        } else {
            alert('Вы не ввели название фильма. Введите заново название фильма и нажмите "Подтвердить"');
        }

        // addInput.value = '';
        addForm.reset();

        callback();
    }

    function filmListOutput() {
        arraySorting();

        promoInteractiveList.innerHTML = '';

        movieDB.movies.forEach((film, i) => {
            promoInteractiveList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();

                movieDB.movies.splice(i, 1);
    
                btn.parentElement.remove();

                filmListOutput();
            });
        });
    }

    // function deleteFilm(index) {



    //     // delete(movieDB.movies[index]);

    //     // movieDB.movies.sort();
    //     // movieDB.movies.pop();

    //     // callback();
    // }

    function removeAdv() {
        promoAdvImg.forEach((item) => {
            item.remove();
        });
    }


});







// const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

// promoInteractiveItem.forEach((item, i) => {
//     promoInteractiveItem[i].textContent = `${i + 1}. ${movieDB.movies[i]}`;
//     //#5
//     promoInteractiveItem[i].insertAdjacentHTML('beforeend' ,'<div class="delete"></div>');
//     //       неправильно, т.к. при добавлении новых элементов в массив, они будут теряться
// });