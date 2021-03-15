'use strickt';

// const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.value);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.toggle('red'));
// console.log(btns[0].classList.value);

const btnWrapper = document.querySelector('.btn-block');

btnWrapper.addEventListener('click', (event) => {
    // console.dir(event.target.tagName);
    if (event.target && event.target.matches('button')) {
        event.target.classList.toggle('red');
    }
});

for (let i = 0; i < 5; i++) {
const btn = document.createElement('button');
// btn.classList.add('red');
btnWrapper.append(btn);
}