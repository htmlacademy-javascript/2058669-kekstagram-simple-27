const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const body = document.querySelector('body');
const overlay = form.querySelector('.img-upload__overlay');
const buttonCancel = form.querySelector('#upload-cancel');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

const closeModal = () => {
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
  if(evt.key === 'Escape' && !isTextFieldFocused()){
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

const onForm = (evt) => {
  const isValid = pristine.validate();
  if(!isValid){
    evt.preventDefault();
  }
};

fileField.addEventListener('change', onFileInputChange);
form.addEventListener('submit', onForm);
