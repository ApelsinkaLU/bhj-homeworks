const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let item = rotatorCase.findIndex((e) => e.classList.contains('rotator__case_active'));
let delay = 1000;

let timerId = setTimeout(function rotate() {
  rotatorCase[item].classList.remove('rotator__case_active');
  item++;
  if (item === rotatorCase.length) {
    item = 0;
  }
  rotatorCase[item].classList.add('rotator__case_active');
  rotatorCase[item].style.color = rotatorCase[item].dataset.color;
  delay = rotatorCase[item].dataset.speed;
  timerId = setTimeout(rotate, delay);
}, delay);