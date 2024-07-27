let signUpBtn=document.querySelector('.signUpBtn');
let signInBtn=document.querySelector('.signInBtn')
let nameField=document.querySelector('.namefield')
let title=document.querySelector('.title');
let underline=document.querySelector('.underline')
let text=document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.textContent='Sign In';
    text.textContent='Forget Password'
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(35px)';
})
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.textContent='Sign Up';
    text.textContent='Password Suggestion'
    signInBtn.classList.add("disable");
    signUpBtn.classList.remove('disable');
    underline.style.transform='translateX(0px)';
})