'use strict';

const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

const hideTabsContent = function(content, tabBtn) {
    content.forEach(item => {
        item.style.display = "none";
    });

    tabBtn.forEach((item) => {
        if (item.classList.contains('tabheader__item_active')) {
            item.classList.remove('tabheader__item_active');
        }
    });
};

const showTabsContent = function(content, tabBtn, i = 0) {
    content[i].style.display = 'block';
    tabBtn[i].classList.add('tabheader__item_active');
};

tabsParent.addEventListener('click', (event) => {
    if (event.target.matches('div.tabheader__item')) {
        hideTabsContent(tabsContent, tabs);
        event.target.classList.add('tabheader__item_active');
    }
    tabs.forEach((item, i) => {
        if (item.classList.contains('tabheader__item_active')) {
            tabsContent[i].style.display = 'block';
        }
    });
});

// const changeTabsContent = function(wrapper, content, tabBtn) {
//         wrapper.addEventListener('click', (event) => {
//             if (event.target.matches('div.tabheader__item')) {
//                 hideTabsContent(tabsContent, tabs);
//                 event.target.classList.add('tabheader__item_active');
//             }
//             tabBtn.forEach((item, i) => {
//                 if (item.classList.contains('tabheader__item_active')) {
//                     content[i].style.display = 'block';
//                 }
//             });
//         });
//     };

hideTabsContent(tabsContent, tabs);
showTabsContent(tabsContent, tabs);
// changeTabsContent(tabsParent, tabsContent, tabs);




// const changeTabsContent = function(content, tabBtn, wrapper) {
//     wrapper.addEventListener('click', (event) => {
//         if (!event.target.matches('.tabheader__item_active')) {
//             event.target.classList.add('.tabheader__item_active');
//             content[]
//         }
//     });
// };



// const changeTabsContent = function(content, tabBtn, parent) {
//     parent.addEventListener('click', (event) => {
        
//         if (event.target.matches('.tabheader__item')) {
//             tabBtn.forEach((tab) => {
//                 if(tab.classList.contains('tabheader__item_active')) {
//                     tab.classList.remove('tabheader__item_active');
//                 }
//             });
//             event.target.classList.add('tabheader__item_active');
//         }
//         hideTabsContent(tabsContent, tabs);
//     });
// };


