import { resetScale } from './scale.js';
import { resetEffect } from './effect.js';
import { sendData } from './api.js';
import { showErrorMessage } from './messages.js';
import { showSuccessMessage } from './messages.js';
import { isEscEvent } from './util.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const body = document.querySelector('body');
const overlay = form.querySelector('.img-upload__overlay');
const buttonCancel = form.querySelector('#upload-cancel');
const commentField = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

const closeModal = () => {
  form.reset();
  resetEffect();
  resetScale();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  buttonCancel.removeEventListener('click', onCancelButtonClick);
  commentField.value = '';
  fileField.value = '';
};

const isTextFieldFocused = () =>
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if(isEscEvent(evt) && !isTextFieldFocused()){
    evt.preventDefault();
    closeModal();
  }
}

function onCancelButtonClick() {
  closeModal();
}

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
  buttonCancel.addEventListener('click', onCancelButtonClick);
};

const onFileInputChange = () => {
  openModal();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

fileField.addEventListener('change', onFileInputChange);

export {setUserFormSubmit};

export {closeModal, openModal};

export {onEscKeyDown};
