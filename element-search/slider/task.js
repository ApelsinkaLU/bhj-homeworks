const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));

function slider(i) {
    let index = sliderItem.indexOf(document.querySelector('.slider__item_active'));
    sliderItem[index].classList.remove('slider__item_active');
    sliderItem[(index + i + sliderItem.length) % sliderItem.length].classList.add('slider__item_active');
}

sliderArrowPrev.onclick = () => slider(-1);
sliderArrowNext.onclick = () => slider(1);