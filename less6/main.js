const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const congratulation = document.getElementById('congratulation');

const formatNum = num => num < 10 ? `0${num}` : num;

const countdownInterval = setInterval(() => {
    let currentDate = new Date();
    let targetDate = new Date(2024, 8, 26); // День рождения (26 сентября 2024 года)
    let difference = targetDate.getTime() - currentDate.getTime();
    
    if (difference <= 0) {
        // Если разница меньше или равна нулю, отображаем поздравление и останавливаем таймер
        clearInterval(countdownInterval);
        congratulation.style.display = 'block';
        return;
    }
    
    let daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursValue = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutesValue = Math.floor((difference / (1000 * 60)) % 60);
    let secondsValue = Math.floor((difference / 1000) % 60);

    days.textContent = formatNum(daysValue);
    hours.textContent = formatNum(hoursValue);
    minutes.textContent = formatNum(minutesValue);
    seconds.textContent = formatNum(secondsValue);
}, 1000);


// console.log(date.getTimezoneOffset());
// console.log(date.getTime());
// console.log(date.getMilliseconds());
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
