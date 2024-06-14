
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const form = document.getElementById('form');

const name_error = document.getElementById('name-error');
const email_error = document.getElementById('email-error');
const pass_error = document.getElementById('pass-error');
var flag=1;
form.addEventListener('submit', (e) => {

    var email_check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var count=0;
    if(flag==0)
        {
             flag++;
        }
    else{
        if (Name.value === '' || Name.value == null) {
            e.preventDefault();
            name_error.innerHTML = "Name is required";
        }
        else {
            name_error.innerHTML = "";
            count++;
        }
        if (!Email.value.match(email_check)) {
            e.preventDefault();
            email_error.innerHTML = "Valid Email is required";
        }
        else {
            email_error.innerHTML = "";
            count++;
        }

        if (Password.value.length < 8) {
            e.preventDefault();
            pass_error.innerHTML = "Password must be more than 8 characters";
        }
        else {
            pass_error.innerHTML = "";
            count++;
        }
        if (Password.value.length > 20) {
            e.preventDefault();
            pass_error.innerHTML = "Password must not exceed 20 characters";
        }
        if (Password.value === 'password' || Password.value === 'Password') {
            e.preventDefault();
            pass_error.innerHTML = "Password cannot be Password";
        }
}
if(count==3)
    {
        alert('You have successfully signed up. Now you can Sign in..!!')
    }
});
var attempt=4;
function validate()
{
        attempt--;
        
            
                if(Email.value=='themenzmart@org.in' && Password.value=='menzmart@123')
                    {
                        window.location="index.html";
                    }
                else if(Email.value=="" && Password.value=="")
                        {
                            
                        }
                    else{
                        
                        alert('Invalid Credentials..!! You have '+attempt+' attempts left.');
                    }
                if(attempt==0){
                    Email.disabled=true;
                    Password.disabled=true;
                    signInBtn.disabled=true;
                }
}
let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let title = document.querySelector('.title');
let nameField = document.querySelector('.namefield');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let error_name = document.querySelector('.nameerror');
let error_email = document.querySelector('.emailerror');
let error_pass = document.querySelector('.passerror');
signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    error_name.innerHTML = '';
    error_email.innerHTML = '';
    error_pass.innerHTML = '';
    title.innerHTML = 'Sign In';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
    text.innerHTML = "Forgot Password? ";
    flag--;
});
signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = "Password Suggestions ";
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';
});