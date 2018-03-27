const templates = document.querySelectorAll(`template`);
const mainContainer = document.querySelector(`.central`);
let counter = 0;

const showScreen = (number) => {
  const fragment = document.createDocumentFragment();

  while (mainContainer.lastChild) {
    mainContainer.removeChild(mainContainer.lastChild);
  }

  fragment.appendChild(templates[number].content.cloneNode(true));
  mainContainer.appendChild(fragment);
};

const onKeyDown = (event) => {
  if (event.altKey && event.keyCode === 39 && counter < templates.length - 1) {
    counter++;
    showScreen(counter);
  }
  if (event.altKey && event.keyCode === 37 && counter > 0) {
    counter--;
    showScreen(counter);
  }
};

showScreen(0);

document.addEventListener(`keydown`, onKeyDown);
