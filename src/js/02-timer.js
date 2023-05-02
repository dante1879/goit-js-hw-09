import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// add styles
const timerStyles = `
  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .field {
    margin: 0 0.5rem;
  }

  .value {
    display: block;
    font-size: 4rem;
    color: #444;
  }

  .label {
    font-size: 1.5rem;
    color: #777;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }
`;

const styleEl = document.createElement('style');
styleEl.textContent = timerStyles;
document.head.appendChild(styleEl);
// end add styles

// refs
const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startButton.disabled = true;
startButton.addEventListener('click', onStartButtonClick)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(dateInput, options);

function onStartButtonClick() {
  const targetDate = new Date(dateInput.value);

  const timerId = setInterval(() => {
    let dateDifference = targetDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(dateDifference);
    daysRef.textContent = days.toString().padStart(2,'0');
    hoursRef.textContent = hours.toString().padStart(2, '0');
    minutesRef.textContent = minutes.toString().padStart(2, '0');
    secondsRef.textContent = seconds.toString().padStart(2, '0');

    if (targetDate - Date.now() <= 0) {
      clearInterval(timerId);
      daysRef.textContent = '00';
      hoursRef.textContent = '00';
      minutesRef.textContent = '00';
      secondsRef.textContent = '00';
    }
  }, 1000);
  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}