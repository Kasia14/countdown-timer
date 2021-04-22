const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minsEL = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


const newYears = '1 Jan 2022'
function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 3600) % 24 % 60;
    const second = Math.floor(totalSeconds) % 60;
    console.log(days, hours, minutes, second, totalSeconds);

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(second);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}
countDown();
setInterval(countDown, 1000)
