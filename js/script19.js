"use strict";

// const someString = 'Strings are useful for holding data that can be represented in text form.';

// console.log(someString[15]);
// const piece = someString.slice(12, 18);
// console.log(piece);

// const piece = someString.substring(12, 18);
// console.log(piece);

// const pieceWord = 'represented';
// const pieceIndex = someString.indexOf(pieceWord);
// const piece = someString.substr(pieceIndex, pieceWord.length);
// console.log(piece);

const sep = ', ';
const someString = ('8px, 1050px, 1350px');

console.log(typeof(someString));

someString.split(', ');

function arrayFromString(string) {
    const sep = ', ';
    const arrString = string.split(sep);
    const arr = [];

    for (let i = 0; i < arrString.length; i++) {
        arr[i] = parseInt(arrString[i]);
    }

    return arr;
}

// const widthArr = arrayFromString(someString);

// widthArr.forEach((item, i) => {
//     console.log(`Элемент под номером ${i + 1} равен ${item}`);
// });

// console.log(arrayFromString(someString));

// console.log(someString);

// const arr = [...someString];

// arr.forEach(function(item) {
//     console.log(item);
// });

// const arr = [];
// console.log(typeof (arr));

// const [widthButton, widthDiv, widthBody] = arr;

// console.log(typeof (widthDiv));
// console.log(widthButton);
// console.log(widthBody);

// const widthDivNum = parseInt(widthDiv);
// const widthButtonNum = parseInt(widthButton);
// const widthBodyNum = parseInt(widthBody);

// console.log(typeof (widthDivNum));
// console.log(widthButtonNum);
// console.log(widthBodyNum);

// const arrClone = [parseInt( ...arr )];
// console.log(arr[1]);

// const arrClone = [];

// for (let i = 0; i < arr.length; i++) {
//     arrClone[i] = parseInt(arr[i]);
// }

// arrClone.forEach(function (item) {
//     // parseInt(item);
//     console.log(item);
// });



// let someWidth = parseInt(someString);
// let someWidth = parseFloat(someString);

const obj = {
    first: 12,
    second: 9,
    third: 78,
    fourth: 125,
    fifth: 8,
    sumObj: function () {
        let sum = 0;

        for (let key in obj) {

            if (key !== ('sumObj')) {
                sum += obj[key];
                console.log(`Свойство с ключем ${key} равно ${obj[key]}`);
            } else {
                break;
            }
        }
        console.log();
        console.log(`Сумма всех элементов объекта равна ${sum}`);
    },
};

const objCopy = {...obj};
objCopy.fourth = 6354;


console.log(objCopy);
console.log(obj);

obj.sumObj();

// const {
//     first,
//     second,
//     third
// } = obj;

// console.log(typeof (obj.fifth));



// console.log(Math.round(someWidth));


const arr = ['adslfkj', 'sdklfj', 'aldskfh', 'oiwuer'];
console.log(arr.join(' / '));