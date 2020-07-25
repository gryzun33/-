' use strict';

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// Запускаем метод объекта
options.makeTest();

// Выводим значение ключа
// console.log(options["colors"][border]);

// Удаляем свойство
delete options.name;

// Вывод всех свойств объекта
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log (`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// Посчитать количество свойств объекта
console.log (Object.keys(options).length);


// Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);