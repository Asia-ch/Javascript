//Retrieving HTML elements from the Dom
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Function to update class and message for errors
function showError(input, message) {
    //Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input ,essage 
    small.innerText = message;
}


//Function to update class and message for success
function  showSuccess(input){
    //Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control success';
}


// Function to checlk if email is valid 
function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}




//Event Listeners
//Create event listener for submit button
form.addEventListener('submit', function(e) {
    // stop page from reloding on submit
    e.preventDefault();



    //Check to see if fields meet required field requirement
    // Check if username input is empty 
    if(username.value === ''){
        // alert('username is required')
        showError(username, 'username is required');
    }else{
        showSuccess(username);
    }


    // Check if email input is empty 
    if(email.value === ''){
        // alert('email is required')
        showError(email, 'email is required');
    } 
    else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid')
    }
    else{
        showSuccess(email);
    }


    // Check if password input is empty 
    if(password.value === ''){
        // alert('password is required')
        showError(password, 'password is required');
    }else{
        showSuccess(password);
    }
    // Check if password input is empty 
    if(password2.value === ''){
        // alert('password is required')
        showError(password2, 'Confirm password is required');
    }else{
        showSuccess(password2);
    }
});