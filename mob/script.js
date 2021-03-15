'use strickt';

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log("start");
        // console.log(event.touches);
        console.log(event.targetTouches[0]);
        // console.log(event.changedTouches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        // console.log("move");
        console.log(event.targetTouches[0].pageX);

    });

    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();

    //     console.log("end");
    // });
});