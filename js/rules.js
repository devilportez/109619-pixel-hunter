import createDOM from './createDOM';
import showScreen from './showScreen';
import game1 from './game1';
import backToGreeting from './backToGreeting';

const rules = () => {
  const template = `
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
  `;
  const rulesScreen = createDOM(template);
  const nextLink = rulesScreen.querySelector(`.rules__button`);
  const nameField = rulesScreen.querySelector(`.rules__input`);

  nameField.addEventListener(`input`, () => {
    if (nameField.value.length > 0) {
      nextLink.disabled = false;

      const onNextLinkClick = () => {
        showScreen(game1());
      };

      nextLink.addEventListener(`click`, onNextLinkClick);
    } else {
      nextLink.disabled = true;
    }
  });

  backToGreeting(rulesScreen);

  return rulesScreen;
};

export default rules;
