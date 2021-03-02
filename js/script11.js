"use strict";

function first() {
    // do smth

    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    // do smth

        console.log(2);
}

first();
second();


function learnJS (lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

// function done() {
//     console.log("Я завершил этот курс!");
// }

learnJS("JS", function() {
    console.log("Я завершил этот курс!");
});