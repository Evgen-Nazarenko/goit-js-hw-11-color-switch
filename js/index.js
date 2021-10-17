const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.startBtn.addEventListener("click", changeColor);
refs.stopBtn.addEventListener("click", onBtnStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, INTERVAL_DELAY);
  refs.startBtn.disabled = true;
}

function onBtnStop() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
