'use strict';

const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

const hideTabsContent = function(content, tabBtn) {
    content.forEach(item => {
        if (!item.classList.contains('hide')) {
            item.classList.add('hide');
        }
        // item.style.display = "none";
    });

    tabBtn.forEach((item) => {
        if (item.classList.contains('tabheader__item_active')) {
            item.classList.remove('tabheader__item_active');
        }
    });
};

const showTabsContent = function(content, tabBtn, i = 0) {
    // content[i].style.display = 'block';
    if (content[i].classList.contains('hide')) {
        content[i].classList.remove('hide');
    }
    tabBtn[i].classList.add('tabheader__item_active');
};

const changeTabsContent = function(tabBtn, tabWrapper) {

tabWrapper.addEventListener('click', (event) => {
    const target = event.target;

    tabBtn.forEach((item, i) => {
        if (target == item) {
            hideTabsContent(tabsContent, tabs);
            showTabsContent(tabsContent, tabs, i);
        }

    });
});
};


hideTabsContent(tabsContent, tabs);
showTabsContent(tabsContent, tabs);
changeTabsContent(tabs, tabsParent);

