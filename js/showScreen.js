import footer from './footer';

const mainContainer = document.querySelector(`.central`);

const showScreen = (screen) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screen);
  mainContainer.appendChild(footer());
};

export default showScreen;
