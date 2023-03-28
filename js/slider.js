const SLIDERS_TO_SHOW = 1;
const SLIDERS_TO_SCROLL = 1;

let nextButton = document.querySelector('.next_button');
let prevButton = document.querySelector('.previous_button');
let track = document.querySelector('.number-with-switch-buttons');
let items = document.querySelectorAll('.slider-item-container');

const ITEMS_COUNT = items.length;
const ITEM_WIDTH = track.clientWidth;
const MOVE_POSITION = SLIDERS_TO_SCROLL * ITEM_WIDTH;

let position = 0;
let currentItemIndex = 0;

Array.from(items).map((item, index) => {
  item.style.minWidth = `${ITEM_WIDTH}px`;
  return item;
});

function nextElement() {
  position -= MOVE_POSITION;
  setPosition(++currentItemIndex);
  checkButtons();
}

function previousElement() {
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

const checkButtons = () => {
  prevButton.disabled = position === 0;
  nextButton.disabled =
    position <= -(ITEMS_COUNT - SLIDERS_TO_SHOW) * ITEM_WIDTH;
};

checkButtons();
