// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('.cirrent__li').dataset.current); ///обращение к атрибуту через свойства dataset

// const currentLi = document.querySelectorAll('li');

// currentLi.forEach((item) => {
//     if (item.dataset.current) {
//         console.log(item.dataset.current);
//     }
// });

// const textArea = document.querySelector('[placeholder="login"]');

// console.log(textArea);

for (let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }
    
    console.log(node);

}

