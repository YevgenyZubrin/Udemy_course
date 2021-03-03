"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj; //ссылка на существующий объект

// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copy(mainObj) {
    let objCopy = {};

    let key;

    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// const numbers = {
//     a: 2,
//     b: 3,
//     c: {
//         x: 7,
//         y: 4,
//     },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(numbers);
// console.log();
// console.log(newNumbers);


// const numbers = {
//     a: 2,
//     b: 3,
//     c: {
//         x: 7,
//         y: 4,
//     },
// };

// const add = {
//     d: 17,
//     e: 20,
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);

// console.log(Object.assign(numbers, add));



const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[1] = 'sdafds';
console.log(oldArr);
console.log(newArr);