let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    let clicks = clickerCounter.textContent++;

    if (clicks % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 170;
    }
};