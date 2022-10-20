const timer = document.getElementById('timer');
let timeCount = timer.textContent;
let newLocation = "https://www.google.com/intl/ru/chrome/";

formatTime(timeCount);
function startTimer() {

    interval = setInterval(() => {
        if (timeCount === 0) {
            alert('Вы победили в конкурсе!');
            window.location = newLocation;
            return clearInterval(interval);
        }

    let timePassed = 0;
    timePassed = timePassed += 1;
    timeCount = timeCount - timePassed;
    timer.textContent = formatTime(timeCount);
    }, 1000);
}


function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = (time % 60); 
    if (hours < 10) { hours = `0${hours}` }
    if (minutes < 10) { minutes = `0${minutes}` }
    if (seconds < 10) { seconds = `0${seconds}` }

    return timer.textContent = `${hours}:${minutes}:${seconds}`;

}
startTimer();