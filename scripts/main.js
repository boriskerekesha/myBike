'use strict';
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const namePattern = /[a-zA-z]/;
const formInputs = document.querySelectorAll('.form-field');
const nameInput = formInputs[0];
const emailInput = formInputs[1];

const validation = (element, pattern) => {
  if (!(pattern.test(element.value))) {
    element.style.backgroundColor = 'red';
    element.focus();
    return true;
  }

  return false;
}

document.querySelector('#sendButton').addEventListener('click', (e) => {
    e.preventDefault();

    if (validation(nameInput, namePattern)) {
      return;
    }

    if (validation(emailInput, emailPattern)) {
      return;
    }

  document.querySelector('#my-form').reset();
});

[nameInput, emailInput].forEach(inputEl => {
  inputEl.addEventListener('input', () => {
    inputEl.style.backgroundColor = 'white';
  })
});
