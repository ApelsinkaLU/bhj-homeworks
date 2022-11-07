const revealElement = Array.from(document.querySelectorAll('.reveal'));

function isInViewport(element) {
    const viewportHeight = window.innerHeight;
    const {top, bottom} = element.getBoundingClientRect();

    if (top < viewportHeight && bottom >= 0) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    }
}

document.onscroll = () => {
    revealElement.forEach((element) => isInViewport(element));
  };