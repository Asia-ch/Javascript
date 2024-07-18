const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//Create Functions Error Message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}


//Create Function Success Message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success';
}

//Create Function checkrequired
// function checkRequired(inputAray) {
//     inputAray.forEach(function(input){
//         if(input.value === ''){
//             showError(input, `is required`)
//         }else{showSuccess(input)}
//     })   
// }
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === ''){
            showError(input, `${getFieldId(input)} is required`);
        }
        else{
            showSuccess(input)
        }
    })
}

function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
// Create event Listener to submit button
form.addEventListener('submit', function(e){
    e.preventDefault()
    checkRequired([username, email, password, password2])
    // checkLength(username, 3, 10)
    // checkLength(password, 6, 10)
    // checkEmail(email)
    // checkPasswordsMatch(password, password2)

});