'use strict'
const modalBtn = document.querySelector('.modal__btn');
const emailField = document.getElementById('email__field');
const passwordField = document.getElementById('password__field');

//listeners
modalBtn.addEventListener('click', (event) => {
   event.preventDefault()

  // валидность мыла
   if(!(validateEmail(emailField.value)) || emailField.value.trim().length === 0){
      emailField.value = '';
      emailField.placeholder = 'Введите E-mail'
      return
   } else{
      emailField.value = '';
      console.log('arbaiten');
   }

   //валидация пароля
   if(passwordField.value.trim().length === 0 || passwordField.value.trim().length < 8){
      passwordField.value = '';
      passwordField.placeholder = 'Неверный пароль'
      return
   }

   document.location.href = "./catalog.html";
})

//функция валидации мыла
function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}
