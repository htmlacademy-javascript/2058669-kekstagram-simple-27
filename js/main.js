function getRandomPositiveInteger (a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const GENERATE_ID = createRandomIdFromRangeGenerator(1, 25);

const GENERATE_URL = createRandomIdFromRangeGenerator(1, 25);

const DESCRIPTION_PHOTO = ['qeks', 'weks', 'eeks', 'reks', 'teks',
  'yeks', 'ueks', 'ieks', 'oeks', 'peks',
  'aeks', 'seks', 'deks', 'feks', 'geks',
  'heks', 'jeks', 'keks', 'leks', 'zeks',
  'xeks', 'ceks', 'veks', 'beks', 'neks',];

const LIKES_PHOTO = Array.from({length: 186}, (_, i) => i + 15);

const COMMENTS_PHOTO = Array.from(Array(201).keys());

const SIMILAR_PHOTO_COUNT = 25;


const createDescription = () => ({
  id: GENERATE_ID(),
  url: `photos/${GENERATE_URL()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomArrayElement(LIKES_PHOTO),
  comments: getRandomArrayElement(COMMENTS_PHOTO)
});

const similarDescriptions = Array.from({length: SIMILAR_PHOTO_COUNT}, createDescription);

console.log(similarDescriptions);
