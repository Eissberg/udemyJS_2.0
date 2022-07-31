'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //Tabs
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

    //Timer

    const deadline = '2022-01-01';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t =  Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
 
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); //альтернативно через toggle
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }   
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show'); //альтернативно через toggle
        document.body.style.overflow = ''; 
    };

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
    // }, {once:true});

    // Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parent.append(element);
        }
    }

    // const div = new MenuCard();
    // div.render();

    const getResourse = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Coud not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getResourse('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {   //получаем обьект и делаем его деструктуризацию вместо obj.img и т.д
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();    
            });
        });

    //динамическое создание обьекта без классов - на лету
    
    // getResourse('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector('.menu .container').append(element);
    //     });
    // }

    //Forms 

    const forms = document.querySelectorAll('form');
    
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thank you! All good!',
        failure: 'Something wrong...!'
    }

    forms.forEach (item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data                                          //При помощи Fetch данные отправляем
        });
        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) =>{
            e.preventDefault();                 //Отмена стандартного поведения браузера

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;  
            statusMessage.style.cssText = `                         
                display: block;
                margin: 0 auto; 
            `;                                                          //Отображение спинера
            form.insertAdjacentElement('afterend', statusMessage);      //Росполагаем спинер

            const formData = new FormData(form);                        //Собираем даные с формы в FormData
            
            // const object = {};
            // formData.forEach(function(value, key) {                  //Используем более элегантную адаптацию в json 
            //     object[key] = value;
            // });  

            const json = JSON.stringify(Object.fromEntries(formData.entries()));  //Адаптация FormData в json
            
            //Отпарвка в формате JSON

            postData('http://localhost:3000/requests', json)
            // .then(data => data.text())                              //Преобразование ответа upd: уже не нужно. проих в postData 
            .then(data => {                                           //Обрабатываем результат запроса
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure); 
            }).finally(() => {
                form.reset();
            })     



            //Отпарвка через FormData
            // fetch('server.php', {                                       
            //     method: "POST",
            //     // headers: {
            //     //     'Content-type': 'application/json'
            //     // },
            //     body: formData                                          //При помощи Fetch данные отправляем
            // }).then(data => data.text())
            // .then(data => {                                           //Обрабатываем результат запроса
            //     console.log(data);
            //     showThanksModal(message.success);
            //     statusMessage.remove();
            // }).catch(() => {
            //     showThanksModal(message.failure); 
            // }).finally(() => {
            //     form.reset();
            // }) 
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide'); // скрываем элемент перед показом модального окна
        openModal();
        
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));
});