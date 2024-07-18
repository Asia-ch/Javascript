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
function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim() )){
        showSuccess(input);
    }else{
        showError(input, `${getFieldId(input)} Please provide a valid Email`)
    }
}

// Function to check if required fields have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === ''){
            showError(input, `${getFieldId(input)} is required`);
        }else{
            showSuccess(input)
        }
    });
}

// Function to get the id of the input field
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
} 

//Function to check length of input field
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldId(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max){
        showError(input, `${getFieldId(input)} needs to be less than ${max} characters`);
    } else{
        showSuccess(input);
    }
}

// Function to check if password and confirm password don't match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value) {
        showError(input2, "Password don't match")
    }
}


//Event Listeners
//Create event listener for submit button
form.addEventListener('submit', function(e) {
    // stop page from reloding on submit
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username,3,10)
    checkLength(password,6,30)
    checkEmail(email)
    checkPasswordsMatch(password, password2)
});