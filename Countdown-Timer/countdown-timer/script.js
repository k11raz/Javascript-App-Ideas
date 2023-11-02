const dayEl = document.querySelector("#days");
const hourEl = document.querySelector("#hours");
const minEl = document.querySelector("#mins");
const secEl = document.querySelector("#seconds");



const newYear = new Date("6 June 2023");

function countdown() {

    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const minutes = Math.floor((totalSeconds / 60) % 60)
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);