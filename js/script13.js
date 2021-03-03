"use strict";

const arr = [1, 2, 3, 4, 5];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach();
console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();

// console.log(arr);

// arr.push(10);

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

for (let value of arr) {

    console.log(value);
}


const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product.join('; '));

function compareNum(a, b) {
    return a - b;
}
