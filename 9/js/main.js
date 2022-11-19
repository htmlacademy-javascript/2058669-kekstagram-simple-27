import{addPictures} from './picture.js';

import './scale.js';

import './effect.js';

import './form.js';

import './api.js';

import{setUserFormSubmit} from './form.js';

import{closeModal} from './form.js';

import{getData} from './api.js';

getData((posts) => {
  addPictures(posts);
});

setUserFormSubmit(closeModal);
