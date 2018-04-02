import showScreen from './showScreen';
import greeting from './greeting';

const backToGreeting = (screen) => {
  const backLink = screen.querySelector(`.back`);
  backLink.addEventListener(`click`, () => {
    showScreen(greeting());
  });
};

export default backToGreeting;
