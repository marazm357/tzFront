const progressFg = document.getElementById('progress-fg');
const valueInput = document.getElementById('valueInput');
const animateToggle = document.getElementById('animateToggle');
const hideToggle = document.getElementById('hideToggle');
const progressCircle = document.getElementById('progress-circle');

const animateSwitchBtn = document.getElementById('animate-switch-btn')
animateSwitchBtn.addEventListener('click', () => {
  animateToggle.checked = !animateToggle.checked
  animateSwitchBtn.classList.toggle('switch-on');
  toggleAnimation()
})

const hideSwitchBtn = document.getElementById('hide-switch-btn')
hideSwitchBtn.addEventListener('click', () => {
  hideToggle.checked = !hideToggle.checked
  hideSwitchBtn.classList.toggle('switch-on');
  toggleVisibility()
})

// Разделить кнопки для анимации и сокрытия

// Функция прогресса
function setProgress(value) {
  const offset = 565.48 - (value / 100) * 565.48;
  progressFg.style.strokeDashoffset = offset;
}

let intervalId
// function toggleAnimation() {
//   if (animateToggle.checked) {
//     let value = 1
//     intervalId = setInterval(() => {
//       const offset = 565.48 - (value++ / 100) * 565.48;
//       progressFg.style.strokeDashoffset = offset;
//     }, 1000)
//   } else {
//     progressFg.style.strokeDashoffset = 565.48 - (0 / 100) * 565.48
//     clearInterval(intervalId)
//   }
// }


// Вращение
function toggleAnimation() {
  if (animateToggle.checked) {
    let angle = -90;
    intervalId = setInterval(() => {
      angle = (angle + 5) % 360;
      progressCircle.style.transform = `rotate(${angle}deg)`;
    }, 50);
  } else {
    clearInterval(intervalId);
    progressCircle.style.transform = 'rotate(-90deg)';
  }
}



// Сокрытие
function toggleVisibility() {
  const container = document.getElementById('progress-circle');
  container.style.display = hideToggle.checked ? 'none' : 'block';
}


valueInput.addEventListener('input', (e) => {
  const value = Math.min(Math.max(e.target.value, 0), 100);
  setProgress(value);
});

animateToggle.addEventListener('change', toggleAnimation);
hideToggle.addEventListener('change', toggleVisibility);
