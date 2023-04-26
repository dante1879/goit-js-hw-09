startBtn = document.querySelector('[data-start]');
stopBtn = document.querySelector('[data-stop]');
body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeRandomBodyBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
    timerId = setInterval(changeRandomBodyBgColor, 1000);
    startBtn.disabled = true
}

function onStopClick() {
    clearInterval(timerId);
    startBtn.disabled = false
}