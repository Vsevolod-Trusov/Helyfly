const SLIDERS_TO_SHOW = 1;

const SLIDERS_TO_SCROLL = 1;

const START_MIN_WIDTH = 220;

const START_POSITION = 0;

const nextButton = document.querySelector('.next_button');

const previousButton = document.querySelector('.previous_button');

const track = document.querySelector('.number-with-switch-buttons');

const items = document.querySelectorAll('.slider-item-container');

const ITEMS_COUNT = items.length;

const ITEM_WIDTH = track.clientWidth ? track.clientWidth : START_MIN_WIDTH;

const MOVE_POSITION = SLIDERS_TO_SCROLL * ITEM_WIDTH;

let position = 0;
let currentItemIndex = 0;

Array.from(items).map((item, index) => {
  item.style.minWidth = `${ITEM_WIDTH}px`;

  return item;
});

function checkButtons() {
  previousButton.disabled = position === START_POSITION;
  nextButton.disabled =
    position <= -(ITEMS_COUNT - SLIDERS_TO_SHOW) * ITEM_WIDTH;
}

function handleClickNextButton() {
  position -= MOVE_POSITION;
  setPosition(++currentItemIndex);
  checkButtons();
}

function handleClickPreviousButton() {
  position += MOVE_POSITION;
  setPosition(--currentItemIndex);
  checkButtons();
}

const setPosition = (currentItem) => {
  let index = currentItem + 1;
  let counterContainers = document.querySelectorAll(`.counter-${index}`);

  Array.from(counterContainers).map((item, index) => {
    if (index === currentItem) {
      item.style.background = '#fc9b09';
    } else {
      item.style.background = 'transparent';
    }

    return item;
  });

  Array.from(items).map((item, index) => {
    item.style.transform = `translateX(${position}px)`;

    return item;
  });
};

checkButtons();
