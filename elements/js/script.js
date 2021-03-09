'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText

// btns[2].style.borderRadius = '100%';

// circles[0].style.backgroundColor = 'green';

// box.style.cssText = `background-color: yellow; width: 500px; border: 5px solid green; border-radius: 15px;`;

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = "grey";
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = "yellow";
// });

// const div = document.createElement('div');

// // const text = document.createTextNode('ля ля ля')

// div.classList.add('black');

// // document.body.append(div); 
// // wrapper.appendChild(div);

// wrapper.append(div);
// // wrapper.prepend(div);

// // wrapper.insertBefore(div, hearts[0]);


// // hearts[2].after(div);

// // circles[0].remove();
// // wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);

// // div.innerHTML = '<div class = "container"><h1>hello</h1> <p>Привет, Вася Пупкин</p></div> ';

// // div.textContent = "hello";

// wrapper.insertAdjacentHTML('beforebegin', '<div class = "container"><h1>hello</h1> <p>Привет, Вася Пупкин</p></div>');