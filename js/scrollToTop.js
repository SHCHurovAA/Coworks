/* Кнопка скролла наверх */

// Находим кнопку
const scrollButton = document.querySelector('#scrollToTopBtn');


// Слушаем событие скролла на странице
window.addEventListener('scroll', function () {

    // Показываем кнопку, если пользователь проскроллил больше высоты экрана
    if (window.pageYOffset > window.innerHeight) {
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }

});











