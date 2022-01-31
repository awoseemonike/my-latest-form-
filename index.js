const form = document.getElementById('form');
const username =document.getElementById('username');
const email=document.getElementById('email');
const password =document.getElementById('password');
const password 2 =document.getElementById('password2');

form.addEventListener('submit',e=>{
    e.preventDefault();


validateInputs();
));

const setError =(element,message) =>{
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');
 
errorDisplay.innerText = message;
 inputControl.classList.add('error');
 inputControl.classList.remove('success');

}
const validateInputs = () =>{
 const usernameValue = username.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();
 const password2Value = email.value.trim();

}; 
if(usernameValue === ''){
  selfError(username, 'Username is required');
}else{
    setSuccess(username);
}
if(emailValue === ''){
    setError(email,'Email is required');
}
else if(! isvalidEmail(emailValue)){
    setError(email,'Provide a valid email address');
}else{
    setSuccess(email);
}
if(passwordValue ===  '') {
    setError(password,'password is required');
}else if (passwordValue.length < 8 ){
setError(password, ' password must be at least 8 character.')
}else{
    setSuccess(password);
}
if(password2Value === '' ){
    setError(password2,'please confirm your password');
}
};