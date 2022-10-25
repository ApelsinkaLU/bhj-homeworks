const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close_times');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

for (let i = 0; i < modalClose.length; i++) {
    modalClose.item(i).onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    };
}

