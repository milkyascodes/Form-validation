const clientname=document.getElementById('name')
clientname.addEventListener('blur',validateName);const email=document.getElementById('email')
email.addEventListener('blur',validateEmail);const message=document.getElementById('message')
message.addEventListener('blur',validateMessage);const form=document.getElementById('form')
form.addEventListener('submit',validateForm);function validateName(){const clientname=document.getElementById('name')
const re=/^[a-zA-Z\s?]{2,20}$/
if(!re.test(clientname.value.trim())){clientname.classList.add('invalid')}else{clientname.classList.remove('invalid')}}
function validateEmail(){const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
if(!re.test(email.value)){email.classList.add('invalid')}else{email.classList.remove('invalid')}}
function validateMessage(){const message=document.getElementById('message')
const re=/^[a-zA-Z\s\W]{2,}$/
if(!re.test(message.value.trim())){message.classList.add('invalid')}else{message.classList.remove('invalid')}}
function validateForm(e){e.preventDefault()
validateName()
validateEmail()
validateMessage()
check()}
function check(){if(clientname.classList.contains('invalid')||email.classList.contains('invalid')||message.classList.contains('invalid')){indicateError()}else{indicateSuccess()}}
function indicateError(){document.querySelector('h3').className='error'
document.querySelector('h3 small').textContent='error'}
function indicateSuccess(){form.reset()
document.querySelector('h3').className='success'
document.querySelector('h3 small').textContent='success'}