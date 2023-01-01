const form = document.querySelector('form')
const [...inputErrors] = document.querySelectorAll('.input__error')
const [...inputLabels] = document.querySelectorAll('.form__label')

const setError = (inputLabel, element, message) => {
  inputLabel.classList.add('error')
  element.innerText = message
}

const setSucess = (inputLabel, element) => {
  inputLabel.classList.remove('error')
  element.innerText = ''
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = (emailInput, usernameInput, passwordInput, password2Input, dateInput) => {
  if(emailInput === ''){
    setError(inputLabels[0], inputErrors[0], '- Deve ser preenchido')
  
  } else if (isValidEmail(email)) {
    setError(inputLabels[0], inputErrors[0], '- Deve ser um email valido')
  
  } else {
    setSucess(inputLabels[0], inputErrors[0])
  }

  if(usernameInput === ''){
    setError(inputLabels[1], inputErrors[1], '- Deve ser preenchido')
  
  } else if(usernameInput.length < 2 || usernameInput.length > 32) {
    setError(inputLabels[1], inputErrors[1], '- Deve conter entre 2 e 32 caracteres')
  
  }  else {
    setSucess(inputLabels[1], inputErrors[1])
  }

  if(passwordInput === ''){
    setError(inputLabels[2], inputErrors[2], '- Deve ser preenchido')
  
  } else {
    setSucess(inputLabels[2], inputErrors[2])
  }

  if(password2Input === ''){
    setError(inputLabels[3], inputErrors[3], '- Deve ser preenchido')
  
  } else if (password2Input !== passwordInput) {
    setError(inputLabels[3], inputErrors[3], '- Deve ser semelhante a primeira senha')
  } else {
    setSucess(inputLabels[3], inputErrors[3])
  }

  if(dateInput === ''){
    setError(inputLabels[4], inputErrors[4], '- Deve ser preenchido')
  
  } else {
    setSucess(inputLabels[4], inputErrors[4])
  }
}

form.addEventListener('submit', ( e ) => {
  e.preventDefault()

  const emailInput = e.target.email.value
  const usernameInput = e.target.username.value
  const passwordInput = e.target.password1.value
  const password2Input = e.target.password2.value
  const dateInput = e.target.date.value

  validateInputs(emailInput, usernameInput, passwordInput, password2Input, dateInput)
})
