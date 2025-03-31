/* Мобильная навигация */

// Находим элементы: кнопку открытия, кнопку закрытия, и модальное окно
const mobileNavBtnOpen = document.querySelector('#openMobileNav');
const mobileNavBtnClose = document.querySelector('#closeMobileNav');
const modalMobileNav = document.querySelector('.mobile-nav');


/* Открываем мобильную навигацию */
mobileNavBtnOpen.addEventListener('click', function () {

    modalMobileNav.classList.add('mobile-nav--open');
    document.body.classList.add('no-scroll');

});

/* Закрываем мобильную навигацию по кнопке закрытия */
mobileNavBtnClose.addEventListener('click', function () {

    modalMobileNav.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');

});

/* Закрываем мобильную навигацию по ссылкам в мобильной навигации */
const mobileNavLinks = modalMobileNav.querySelectorAll('a, button');

mobileNavLinks.forEach(function (item) {

    item.addEventListener('click', function () {

        modalMobileNav.classList.remove('mobile-nav--open');
        document.body.classList.remove('no-scroll');

    });

});
