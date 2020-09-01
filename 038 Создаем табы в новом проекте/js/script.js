'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');        //переделываем через классы
            item.classList.remove('show', 'fade');     //переделываем через классы
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {    //подстановка значения по умолчанию для функции без паарметров
    //    tabsContent[i].style.display = 'block';
       tabsContent[i].classList.add('show', 'fade');    //переделываем через классы
       tabsContent[i].classList.remove('hide');    //переделываем через классы
       tabs[i].classList.add('tabheader__item_active'); 
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});