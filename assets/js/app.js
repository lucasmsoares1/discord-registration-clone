const form = document.querySelector('form')
const [...inputErrors] = document.querySelectorAll('.input__error')
const [...inputLabels] = document.querySelectorAll('.form__label')


// add error messages
const setError = (inputLabel, element, message) => {
  inputLabel.classList.add('error')
  element.innerText = message
}

// remove error messages
const setSucess = (inputLabel, element) => {
  inputLabel.classList.remove('error')
  element.innerText = ''
}

// validations
const validateInputs = (inputs) => {
  // check if inputs are empty
  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i] === ''){
      setError(inputLabels[i], inputErrors[i], '- Deve ser preenchido')

    } else {
      setSucess(inputLabels[i], inputErrors[i])
    }
  }

  if(inputs[1].length < 2 || inputs[0].length > 32) {
    setError(inputLabels[1], inputErrors[1], '- Deve conter entre 2 e 32 caracteres')
  }  

  if(inputs[2].length < 2 || inputs[2].length > 32){
    setError(inputLabels[2], inputErrors[2], '- Deve ser preenchido')
  }

  if (inputs[3] !== inputs[2]) {
    setError(inputLabels[3], inputErrors[3], '- Deve ser semelhante a primeira senha')
  }
}

// send form
form.addEventListener('submit', ( e ) => {
  e.preventDefault()

  const emailInput = e.target.email.value
  const usernameInput = e.target.username.value
  const passwordInput = e.target.password1.value
  const password2Input = e.target.password2.value
  const dateInput = e.target.date.value

  const inputs = [emailInput, usernameInput, passwordInput, password2Input, dateInput]
  validateInputs(inputs)
})
