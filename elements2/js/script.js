' use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// прописываем инлайн-стили   
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

// добавить класс к элементу
div.classList.add('black');

// расположить div в конце элемента wrapper
wrapper.append(div);

// расположить div в начале элемента
// wrapper.prepend(div);

// расположить элемент div до элемента
// hearts[0].before(div);

// расположить элемент div после элемента
// hearts[0].after(div);

// удалить элемент
// circles[0].remove();

// заменить элемент
// hearts[0].replaceWith(circles[0]);

// задаем содержимое элемента
// div.innerHTML = "Hello World";
div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

// вставить участок кода
div.insertAdjacentHTML("beforebegin",'<h2>Hello</h2>');
