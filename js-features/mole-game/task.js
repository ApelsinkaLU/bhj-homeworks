let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function checkHole() {

    const currentHole = this;

    if (currentHole.className.includes('hole_has-mole')) {
        dead.textContent = +dead.textContent + 1;
    } else {
        lost.textContent = +lost.textContent + 1;
    }

    if (+dead.textContent === 10) {
        alert('Победа!');
        dead.textContent = 0;
        lost.textContent = 0;
    }

    if (+lost.textContent === 5) {
        alert('Вы проиграли');
        dead.textContent = 0;
        lost.textContent = 0;
    }
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (i = 1; 9; i++) {
    getHole(i).onclick = checkHole;
}