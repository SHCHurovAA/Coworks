/* Модальные окна */


const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');



function openModal() {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
}



// Открываем модальное окно
openModalBtns.forEach(function (item) {
    item.addEventListener('click', openModal);
});


// Закрываем модальное окно по кнопке закрытия
closeModalBtn.addEventListener('click', closeModal);


// Закрываем модальное окно по области оверлея
modal.addEventListener('click', closeModal);


// Запрещаем закрывать модальное окно из основной области модального окна
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Закрываем модальное окно по нажатию клавиши Escape
document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
        closeModal();
    }
});