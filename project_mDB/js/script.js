/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

' use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)
// let advertisment = document.querySelector('.promo__adv');
// advertisment.remove();

// или
// let advertisment = document.querySelectorAll('[alt="some picture"]');

// for(let i = 0; i < advertisment.length; i++) {
//     advertisment[i].remove();
// }

// решение учителя
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});

// const adv = document.querySelectorAll('.promo__adv img');
// adv.forEach(function (item) {
//     item.remove();
// });

// 2)
// document.getElementsByClassName("promo__genre")[0].textContent = "драма";
// console.log(document.getElementsByClassName("promo__genre"));

// решение учителя
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
genre.textContent = 'драма';


// 3)
// document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4)
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film,i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});





