const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      overlayTwo = document.querySelector('.overlay_2');
// btn.onclick = function() {
//     alert('click');             //так не делается, т.к. если большой код, и мы повторяем действие, то первое назначение теряется
// };

// let i = 0;

const deleteElement = (e) => {
    e.stopPropagation();
    // evt.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    
    // i++;

    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
overlayTwo.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', (evt) => {
//     evt.preventDefault();

//     console.log(evt);
// });