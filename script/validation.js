const firstnameContainer = document.getElementById('firstnameContainer');
const secondnameContainer = document.getElementById('secondnameContainer');
const emailContainer = document.getElementById('emailContainer');
const passwordContainer = document.getElementById('passwordContainer');
const descriptionContainer = document.getElementById('descriptionContainer');

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('form1');
    form.addEventListener('submit',validateForm)
})

function validateName(name, balise){
    name.querySelector(balise).value.trim() !== '' ? successMsg(name, balise, 'valid') : errorMsg(name, balise,'this field is required');
}
function validateEmail(email, balise){
    email.querySelector(balise).value.trim() !== ''  ? successMsg(email, balise, 'valid') : errorMsg(email, balise,'this field is required');
}
function validatePassword(password, balise){
    password.querySelector(balise).value.trim() !== ''  ? successMsg(password, balise, 'valid') : errorMsg(password, balise,'this field is required');
}
function validateDescription(description, balise){
    description.querySelector('textarea').value.trim() !== ''  ? successMsg(description, balise, 'valid') : errorMsg(description, balise,'this field is required');
}

function errorMsg(item, balise,message) {
    item.style.color = 'red';
    item.querySelector(balise).classList.add('border-1', 'border-red-500', 'bg-red-100', 'placeholder:text-red-500');
    item.querySelector('p').classList.add('text-red-500');
    item.querySelector('p').innerHTML = message;
}

function successMsg(item, balise, message) {
    item.style.color = 'green';
    item.querySelector(balise).classList.remove('border-1', 'border-red-500', 'bg-red-100', 'placeholder:text-red-500');
    item.querySelector('p').classList.remove('text-red-500');
    item.querySelector(balise).classList.add('border-1', 'border-green-500', 'bg-green-100', 'placeholder:text-green-500');
    item.querySelector('p').classList.add('text-green-500');
    item.querySelector('p').innerHTML = message;
}


function validateForm(event){
    event.preventDefault();
    validateName(firstnameContainer,'input')
    validateName(secondnameContainer,'input')
    validateEmail(emailContainer, 'input')
    validatePassword(passwordContainer, 'input')
    validateDescription(descriptionContainer, 'textarea')
    
}
