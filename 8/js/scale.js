const scale = document.querySelector('.img-upload__scale');
const previewImg = document.querySelector('.img-upload__preview img');
const buttonSmaller = scale.querySelector('.scale__control--smaller');
const buttonBigger = scale.querySelector('.scale__control--bigger');
const scaleInput = scale.querySelector('.scale__control--value');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  previewImg.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if(newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if(newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

buttonSmaller.addEventListener('click', onButtonSmallerClick);
buttonBigger.addEventListener('click', onButtonBiggerClick);

export {resetScale};
