"use strict";

// const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
};


const user = {
    name: "John",
    age: 30,
};

console.log(options);
console.log();
console.log(user);

let box = options.name;
options.name = user.name;
user.name = box;

console.log(options);
console.log();
console.log(user);

// const {name: n, width: w, height: h} = options;
const {name: optionsName, width: optionsWidth, height: optionsHeight} = options;
console.log(optionsName);
console.log(optionsWidth);
console.log(optionsHeight);


// const {border, bg} = options["colors"];
// console.log(bg);
// console.log(options);

// delete options.name;
// console.log(options);

// for (let key in options) {
//     console.log(`объект с ключом ${key} имеет значение ${options[key]}`);
// }

// let count = 0;

// for (let key in options) {

//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             // count++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         // count++;
//     }
// }

// console.log(count);


// console.log(Object.keys(options).length);


// const flat = {
//     bedroom: 'test',
//     kitchen: 1024,
//     cup: 1024,
//     soap: 'nivea',
//     fork: 25,
//     spoon: 41,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     objectLength: function() {
//         console.log(Object.keys(flat).length - 1);
//     }
// };

// flat.objectLength();

// let lengthOfFlat = Object.keys(flat).length;

// console.log(flat);
// console.log(lengthOfFlat);
























// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//     }
// } else {
//      console.log(`свойство ${key} имеет значение ${options[key]}`);
//      counter++;
// }
// }

// console.log(counter);
