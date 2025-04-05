const form = document.querySelector('#form');

const nameIconError = document.querySelector('#name-icon-error');
const nameMsgError = document.querySelector('#name-msg-error');

const lastNameIconError = document.querySelector('#last-name-icon-error');
const lastNameMsgError = document.querySelector('#last-name-msg-error');

const emailIconError = document.querySelector('#email-icon-error');
const emailMsgError = document.querySelector('#email-msg-error');

const passwordIconError = document.querySelector('#password-icon-error');
const passwordMsgError = document.querySelector('#password-msg-error');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const nameInput = e.target[0];
  const nameValue = nameInput.value;
  
  const lastNameInput = e.target[1];
  const lastNameValue = lastNameInput.value;
  
  const emailInput = e.target[2];
  const emailValue = emailInput.value;
  
  const passwordInput = e.target[3];
  const passwordValue = passwordInput.value;

  // NAME
  // if(nameValue.trim() === ''){
  //   nameInput.classList.add('border-error');
  //   nameIconError.classList.remove('hidden');
  //   nameMsgError.classList.remove('hidden');
  // }else{
  //   nameInput.classList.remove('border-error');
  //   nameIconError.classList.add('hidden');
  //   nameMsgError.classList.add('hidden');
  // }
  validateInput(nameValue.trim() === '', nameInput, nameIconError, nameMsgError);
  
  // nameError.classList.toggle('hidden', (name.trim() !== ''))
  // nameInput.classList.toggle('border-error', (name.trim() !== ''));

  // LASTNAME
  // if(lastNameValue.trim() === ''){
  //   lastNameInput.classList.add('border-error');
  //   lastNameIconError.classList.remove('hidden');
  //   lastNameMsgError.classList.remove('hidden');
  // }else{
  //   lastNameInput.classList.remove('border-error');
  //   lastNameIconError.classList.add('hidden');
  //   lastNameMsgError.classList.add('hidden');
  // }
  validateInput(lastNameValue.trim() === '', lastNameInput, lastNameIconError, lastNameMsgError);
  
  // EMAIL

  const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const isValid = regExp.test(emailValue);

  // if(!isValid){
  //   emailInput.classList.add('border-error');
  //   emailIconError.classList.remove('hidden');
  //   emailMsgError.classList.remove('hidden');
  // }else{
  //   emailInput.classList.remove('border-error');
  //   emailIconError.classList.add('hidden');
  //   emailMsgError.classList.add('hidden');
  // }
    validateInput(!isValid, emailInput, emailIconError, emailMsgError)
  
  // PASSWORD
  // if(passwordValue.trim() === ''){
  //   passwordInput.classList.add('border-error');
  //   passwordIconError.classList.remove('hidden');
  //   passwordMsgError.classList.remove('hidden');
  // }else{
  //   passwordInput.classList.remove('border-error');
  //   passwordIconError.classList.add('hidden');
  //   passwordMsgError.classList.add('hidden');
  // }
  validateInput(passwordValue.trim() === '', passwordInput,passwordIconError, passwordMsgError)

});

function validateInput(condition, input, iconError, msgError){
  if(condition){
    input.classList.add('border-error');
    iconError.classList.remove('hidden');
    msgError.classList.remove('hidden');
  }else{
    input.classList.remove('border-error');
    iconError.classList.add('hidden');
    msgError.classList.add('hidden');
  }
}