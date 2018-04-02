import createDOM from './createDOM';
import showScreen from './showScreen';
import greeting from './greeting';

const intro = () => {
  const template = `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  `;
  const introScreen = createDOM(template);
  const nextLink = introScreen.querySelector(`.intro__asterisk`);

  const onNextLinkClick = () => {
    showScreen(greeting());
  };

  nextLink.addEventListener(`click`, onNextLinkClick);

  return introScreen;
};

export default intro;
