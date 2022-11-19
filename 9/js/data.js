import {getRandomPositiveInteger} from './util.js';

import {getRandomArrayElement} from './util.js';

const MIN_ID = 1;

const MAX_ID = 25;

const MIN_LIKES = 15;

const MAX_LIKES = 200;

const MIN_COMMENTS = 0;

const MAX_COMMENTS = 200;

const SIMILAR_PHOTO_COUNT = 25;

const createRandomIdFromRangeGenerator = (min, max) => {
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
};

const generateId = createRandomIdFromRangeGenerator(MIN_ID, MAX_ID);

const generateLikesPhoto = createRandomIdFromRangeGenerator(MIN_LIKES, MAX_LIKES);

const generateCommentsPhoto = createRandomIdFromRangeGenerator(MIN_COMMENTS, MAX_COMMENTS);

const descriptionPhoto = ['Любовь состоит из деталей, и одна из них - это поддержка.', 'Koгдa вы гoвopитe друг другу кoмплимeнты.',
  'Потому что кaждoмy нyжeн дpyг.', 'Heт никoгo суровее чем лyчшиe дpyзья',
  'Koгдa ты нeмнoгo стеснительный', 'Когнитивный диccoнaнc', 'Heмнoгo poмaнтики вам в лeнтy.'];

const createDescription = function() {
  const idPhoto = generateId();
  return {
    id: idPhoto,
    url: `photos/${idPhoto}.jpg`,
    description: getRandomArrayElement(descriptionPhoto),
    likes: generateLikesPhoto(),
    comments: generateCommentsPhoto()
  };
};

const similarDescriptions = Array.from({length: SIMILAR_PHOTO_COUNT}, createDescription);

export{similarDescriptions};
