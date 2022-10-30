const buttons = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownItems = Array.from(document.getElementsByClassName('dropdown__link'));

for (let item of buttons) {
    item.addEventListener('click', dropdown);
}

for (let item of dropdownItems) {
    item.addEventListener('click', onClickItem);
}

function dropdown() {
    this.nextElementSibling.className === 'dropdown__list' ? this.nextElementSibling.className = 'dropdown__list dropdown__list_active' : this.nextElementSibling.className = 'dropdown__list';
}

function onClickItem(event) {
    this.closest('ul').className = 'dropdown__list';
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
    event.preventDefault();
}