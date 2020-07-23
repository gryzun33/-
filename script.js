' use strict'; 

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// let a, b;

// do {
//     a = prompt('Один из последних просмотренных фильмов?', ''); 
//     b = prompt('На сколько оцените его?', '');
// } while ( a === null || a === '' || b === null || b === '' ||
//     a.length > 50);





let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?','');
    const b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB[a] = [b];
        console.log ('done');
    } else {
        console.log('error');
        i--;
    }
}

if (numberOfFilms < 10) {
    alert ("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert ("Вы классический зритель"); 
} else if (numberOfFilms > 30) {
    alert ("Вы киноман") ;
} else {
    alert ("Произошла ошибка");
}











