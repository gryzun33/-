' use strict'; 

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null ||
     isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLebel() {
    if (numberOfFilms < 10) {
        alert ("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert ("Вы классический зритель"); 
    } else if (numberOfFilms > 30) {
        alert ("Вы киноман") ;
    } else {
        alert ("Произошла ошибка");
    }
}

// detectPersonalLebel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
    }
}

writeYourGenres();










