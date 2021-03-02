"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);

    let num = 50;
}

showFirstMessage('hello!!!!');
console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 8));
// console.log(calc(1, 3));
// console.log(calc(5, 2));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);


const logger = function() {
    console.log('hello');
};

logger();


const calc = (a, b) => { return a + b };
    
    console.log(calc(4, 8));
    console.log(calc(1, 3));
    console.log(calc(5, 2));