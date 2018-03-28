const templates = document.querySelectorAll(`template`);
const mainContainer = document.querySelector(`.central`);
let counter = 0;

const showScreen = (number) => {
  const fragment = document.createDocumentFragment();

  mainContainer.innerHTML = ``;

  fragment.appendChild(templates[number].content.cloneNode(true));
  mainContainer.appendChild(fragment);
};

const onKeyDown = (event) => {
  const RIGHT_ARROW_KEY = 39;
  const LEFT_ARROW_KEY = 37;

  const rightArrow = event.keyCode === RIGHT_ARROW_KEY;
  const leftArrow = event.keyCode === LEFT_ARROW_KEY;
  const counterTopLimiter = counter < templates.length - 1;

  if (event.altKey && rightArrow && counterTopLimiter) {
    counter++;
    showScreen(counter);
  }
  if (event.altKey && leftArrow && counter > 0) {
    counter--;
    showScreen(counter);
  }
};

showScreen(0);

document.addEventListener(`keydown`, onKeyDown);
