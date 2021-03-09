/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS

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
        "Скотт Пилигрим против...",
        "Гарри Поттер"
    ]
};

//#1
// const promoAdv = document.querySelector('.promo__adv');
const promoAdvImg = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelector(".promo__genre"),
      promoInteractiveList = document.querySelector('.promo__interactive-list');

promoAdvImg.forEach((item) => {
    item.remove();
});

//#2
promoGenre.textContent = 'драма';

//#3
promoBg.style.backgroundImage = 'url(img/bg.jpg)';

//#4
movieDB['movies'].sort();

promoInteractiveList.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

// const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

// promoInteractiveItem.forEach((item, i) => {
//     promoInteractiveItem[i].textContent = `${i + 1}. ${movieDB.movies[i]}`;
//     //#5
//     promoInteractiveItem[i].insertAdjacentHTML('beforeend' ,'<div class="delete"></div>');
//     //       неправильно, т.к. при добавлении новых элементов в массив, они будут теряться
// });
