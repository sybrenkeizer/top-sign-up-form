// Elements general
const passwordInitialInputEl = document.querySelector('#password--initial');
const passwordConfirmInputEl = document.querySelector('#password--confirm');
const tooltipInitial = document.querySelector('.tooltip--initial');
const tooltipConfirm = document.querySelector('.tooltip--confirm');
const button = document.querySelector('.button');
// Elements initial password tooltip
const tooltipInitialLength = document.querySelector('.tt-i--length');
const tooltipInitialNumber = document.querySelector('.tt-i--number');
const tooltipInitialLower = document.querySelector('.tt-i--lowercase');
const tooltipInitialUpper = document.querySelector('.tt-i--uppercase');
const tooltipInitialCharacter = document.querySelector('.tt-i--character');
// Elements confirm password tooltip
const tooltipConfirmLength = document.querySelector('.tt-c--length');
const tooltipConfirmNumber = document.querySelector('.tt-c--number');
const tooltipConfirmLower = document.querySelector('.tt-c--lowercase');
const tooltipConfirmUpper = document.querySelector('.tt-c--uppercase');
const tooltipConfirmCharacter = document.querySelector('.tt-c--character');

///////////////////////////////////////////////////////////////////

// Complete validation values passwords
let passwordMatch = false;
let passwordInitialValid = false;
let passwordConfirmValid = false;

///////////////////////////////////////////////////////////////////

// Initial password tooltip
passwordInitialInputEl.addEventListener('focus', () => tooltipInitial.style.display = 'block')
passwordInitialInputEl.addEventListener('blur', () => tooltipInitial.style.display = 'none')

///////////////////////////////////////////////////////////////////

// Confirm password tooltip
passwordConfirmInputEl.addEventListener('focus', () => tooltipConfirm.style.display = 'block')
passwordConfirmInputEl.addEventListener('blur', () => tooltipConfirm.style.display = 'none')

///////////////////////////////////////////////////////////////////

const passwordInitialValidation = function() {
  // Validation values password initial
  let initialLength = false;
  let initialNumber = false;
  let initialLower = false;
  let initialUpper = false;
  let initialCharacter = false;
  // Length
  if (passwordInitialInputEl.value.length > 8) {
    tooltipInitialLength.style.color = 'green';
    tooltipInitialLength.style.listStyle = 'url(img/check-green-16px.png)';
    initialLength = true;
  } else {
    tooltipInitialLength.style.color = 'var(--clr-dark)';
    tooltipInitialLength.style.listStyle = 'disc';
    initialLength = false;
  }
  // Number
  const numRgx = /\d/g
  if (passwordInitialInputEl.value.match(numRgx)) {
    tooltipInitialNumber.style.color = 'green';
    tooltipInitialNumber.style.listStyle = 'url(img/check-green-16px.png)';

    initialNumber = true;
  } else {
    tooltipInitialNumber.style.color = 'var(--clr-dark)';
    tooltipInitialNumber.style.listStyle = 'disc';
    initialNumber = false
  }
  // Lowercase
  const lowercaseRgx = /[a-z]/g
  if (passwordInitialInputEl.value.match(lowercaseRgx)) {
    tooltipInitialLower.style.color = 'green';
    tooltipInitialLower.style.listStyle = 'url(img/check-green-16px.png)';
    initialLower = true;
  } else {
    tooltipInitialLower.style.color = 'var(--clr-dark)';
    tooltipInitialLower.style.listStyle = 'disc';
    initialLower = false;
  }
  // Uppercase
  const uppercaseRgx = /[A-Z]/g
  if (passwordInitialInputEl.value.match(uppercaseRgx)) {
    tooltipInitialUpper.style.color = 'green';
    tooltipInitialUpper.style.listStyle = 'url(img/check-green-16px.png)';

    initialUpper = true;
  } else {
    tooltipInitialUpper.style.color = 'var(--clr-dark)';
    tooltipInitialUpper.style.listStyle = 'disc';
    initialUpper = false;
  }
  // Special character
  const characterRgx = /\W/g
  if (passwordInitialInputEl.value.match(characterRgx)) {
    tooltipInitialCharacter.style.color = 'green';
    tooltipInitialCharacter.style.listStyle = 'url(img/check-green-16px.png)';
    initialCharacter = true;
  } else {
    tooltipInitialCharacter.style.color = 'var(--clr-dark)';
    tooltipInitialCharacter.style.listStyle = 'disc';
    initialCharacter = false;
  }
  // Complete
  if (initialLength === true &&
      initialNumber === true &&
      initialLower === true &&
      initialUpper === true &&
      initialCharacter === true) {
        passwordInitialValid = true;
      } else {
        passwordInitialValid = false;
      }
  // Input check
  if (passwordInitialValid === true) {
    passwordInitialInputEl.style.backgroundImage = 'url(img/check-black.svg)';
  } else {
    passwordInitialInputEl.style.backgroundImage = 'none';
  }
}

///////////////////////////////////////////////////////////////////

const passwordConfirmValidation = function() {
  // Validation values password confirm
  let confirmLength = false;
  let confirmNumber = false;
  let confirmLower = false;
  let confirmUpper = false;
  let confirmCharacter = false;
  // Length
  if (passwordConfirmInputEl.value.length > 8) {
    tooltipConfirmLength.style.color = 'green';
    tooltipConfirmLength.style.listStyle = 'url(img/check-green-16px.png)';
    confirmLength = true;
  } else {
    tooltipConfirmLength.style.color = 'var(--clr-dark)';
    tooltipConfirmLength.style.listStyle = 'disc';
    confirmLength = false;
  }
  // Number
  const numRgx = /\d/g
  if (passwordConfirmInputEl.value.match(numRgx)) {
    tooltipConfirmNumber.style.color = 'green';
    tooltipConfirmNumber.style.listStyle = 'url(img/check-green-16px.png)';
    confirmNumber = true;
  } else {
    tooltipConfirmNumber.style.color = 'var(--clr-dark)';
    tooltipConfirmNumber.style.listStyle = 'disc';
    confirmNumber = false;
  }
  // Lowercase
  const lowercaseRgx = /[a-z]/g
  if (passwordConfirmInputEl.value.match(lowercaseRgx)) {
    tooltipConfirmLower.style.color = 'green';
    tooltipConfirmLower.style.listStyle = 'url(img/check-green-16px.png)';
    confirmLower = true;
  } else {
    tooltipConfirmLower.style.color = 'var(--clr-dark)';
    tooltipConfirmLower.style.listStyle = 'disc';
    confirmLower = false;
  }
  // Uppercase
  const uppercaseRgx = /[A-Z]/g
  if (passwordConfirmInputEl.value.match(uppercaseRgx)) {
    tooltipConfirmUpper.style.color = 'green';
    tooltipConfirmUpper.style.listStyle = 'url(img/check-green-16px.png)';
    confirmUpper = true;
  } else {
    tooltipConfirmUpper.style.color = 'var(--clr-dark)';    tooltipConfirmUpper.style.listStyle = 'disc';
    confirmUpper = false;
  }
  // Special character
  const characterRgx = /\W/g
  if (passwordConfirmInputEl.value.match(characterRgx)) {
    tooltipConfirmCharacter.style.color = 'green';
    tooltipConfirmCharacter.style.listStyle = 'url(img/check-green-16px.png)';
    confirmCharacter = true;
  } else {
    tooltipConfirmCharacter.style.color = 'var(--clr-dark)';
    tooltipConfirmCharacter.style.listStyle = 'disc';
    confirmCharacter = false;
  }
  // Complete
  if (confirmLength === true &&
      confirmNumber === true &&
      confirmLower === true &&
      confirmUpper === true &&
      confirmCharacter === true) {
        passwordConfirmValid = true;
      } else {
        passwordConfirmValid = false;
      }
  // Input check
  if (passwordConfirmValid === true) {
    passwordConfirmInputEl.style.backgroundImage = 'url(img/check-black.svg)';
  } else {
    passwordConfirmInputEl.style.backgroundImage = 'none';
  }
}

///////////////////////////////////////////////////////////////////

const verifyPasswords = function() {
  // Check for match
  if(passwordInitialInputEl.value === passwordConfirmInputEl.value) {
    passwordMatch = true;
  }
  // Check for corret password initial input
  if (passwordInitialValid === false) {
    passwordInitialInputEl.focus();
    passwordInitialInputEl.setCustomValidity('Invalid field.');
  } else {
    passwordInitialInputEl.setCustomValidity('');
  }
  // Check for corret password confirm input
  if (passwordConfirmValid === false) {
    passwordConfirmInputEl.focus();
    passwordConfirmInputEl.setCustomValidity('Invalid field.');
  } else {
    passwordConfirmInputEl.setCustomValidity('');
  }
  // Check for match
  if (passwordInitialValid === true &&
      passwordConfirmValid === true &&
      passwordMatch === false) {
    alert('Your passwords do not match');
    passwordConfirmInputEl.focus();
  }
  // Complete verification
  if (passwordMatch === true &&
      passwordInitialValid === true &&
      passwordConfirmValid === true) {
        alert('Your account has succesfully been made.\nWelcome to the Odin team!');
      }
}

///////////////////////////////////////////////////////////////////

passwordInitialInputEl.addEventListener('input', () => passwordInitialValidation())
passwordConfirmInputEl.addEventListener('input', () => passwordConfirmValidation())
button.addEventListener('click', () => verifyPasswords())
