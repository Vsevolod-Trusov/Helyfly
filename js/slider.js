const SLIDES_TO_SHOW = 1;
const SLIDES_TO_SCROLL = 1;
const START_MIN_WIDTH = 220;
const START_POSITION = 0;

const nextButton = document.querySelector('.next_button');
const previousButton = document.querySelector('.previous_button');
const track = document.querySelector('.number-with-switch-buttons');
const sliderItems = document.querySelectorAll('.slider-item-container');

const sliderItemsArray = Array.from(sliderItems);

const ITEMS_COUNT = sliderItems.length;

const ITEM_WIDTH = track.clientWidth ? track.clientWidth : START_MIN_WIDTH;

const MOVE_POSITION = SLIDERS_TO_SCROLL * ITEM_WIDTH;

let position = 0;
let currentItemIndex = 0;

sliderItemsArray.map((slide, index) => {
  slide.style.minWidth = `${ITEM_WIDTH}px`;

  return slide;
});

const checkButtons = () => {
  previousButton.disabled = position === START_POSITION;
  nextButton.disabled =
    position <= -(ITEMS_COUNT - SLIDERS_TO_SHOW) * ITEM_WIDTH;
};

const setPosition = (currentItem) => {
  const index = currentItem + 1;
  const counterContainers = document.querySelectorAll(`.counter-${index}`);
  const circlesContainerArray = Array.from(counterContainers);

  circlesContainerArray.map((circleElement, index) => {
    if (index === currentItem) {
      circleElement.style.background = '#fc9b09';
    } else {
      circleElement.style.background = 'transparent';
    }

    return circleElement;
  });

  sliderItemsArray.map((slide, index) => {
    slide.style.transform = `translateX(${position}px)`;

    return slide;
  });
};

const handleClickNextButton = () => {
  position -= MOVE_POSITION;
  setPosition(++currentItemIndex);
  checkButtons();
};

const handleClickPreviousButton = () => {
  position += MOVE_POSITION;
  setPosition(--currentItemIndex);
  checkButtons();
};

checkButtons();
