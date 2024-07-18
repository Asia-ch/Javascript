// alert("Hello World;")
// document.write("This is first browser's code")
// let z = 10;
// console.log(z)
//i set a's value 10
//console.log used for print value in console


// Practice exercise 2.3
// let a = prompt("Enter value for a")
// console.log(`value of a ${a}`)
// let b = prompt("Enter value for b")
// console.log(`value of b ${b}`)
// let c = a * a + b*b
// console.log(c*c)


// Practice exercise 2.4

let t = 5;
let u = 5;
let v = 5;

let c = t + u;
// console.log(`the addition of t and u ${c}`)
let d = t / u;
// console.log(`the division of t by v ${d}`)
// console.log(`modulus of c and b ${v % u}`)


// Practice exercise 4.2
// let ageInp = prompt("Enter your age")
// let age = Number(ageInp)
// console.log(typeof(age))
// if(age < 3){
    // console.log("Access is free under three")
// }else if(age < 12){
    // console.log("With the child discount, the fee is 5 dollars");
// }else if(age < 65){
    // console.log("A regular ticket costs 10 dollars.");
// }else if(age >= 65){
    // console.log("A ticket is 7 dollars.");
// }

// Practice exercise 4.4

let randomVal = Math.random()
console.log(typeof(randomVal))
randomVal = Math.floor(randomVal * 5)
Math.floor(randomVal)
console.log(randomVal)

// let inpVal = prompt("Please enter any number between 1- 5")
// inpVal = Number(inpVal)
// switch(inpVal){
    // case 5:
        // console.log("Your value is 5")
        // break;
    // case 4:
        // console.log("Your value is 4")
        // break;
    // case 3:
        // console.log("Your value is 3")
        // break;
    // case 2:
        // console.log("Your value is 2")
        // break;
    // case 1:
        // console.log("Your value is 1")
        // break;
    // default:
        // console.log("Please enter the value within 5")

// }

// Practice exercise 4.5
// let prize = prompt("Enter a number between 0-10")
// prize = Number(prize)
// let message = "My Selection"

// switch(prize){
//     case 0: 
//     console.log(message + " Gold")
//     break;
//     case 1:
//         console.log(message + " Coin")
//         break;
//     case 2:
//         console.log(message + " Silver")
//         break;
//     case 3:
//         console.log(message + " Bricks")
//         break;
//     case 4:
//         console.log(message + " Big")
//         break;
//     case 5:
//         console.log(message + " Box of")
//         break;
//     default:
//         message += " Sorry Try Again";
// }
// console.log(message);














// // Chapter project
// // Miles-to-kilometers converter
// // let milNum = prompt("Enter the value of miles")
// let oneMile = 1.60934
// let kmVal = milNum * oneMile
// // console.log(kmVal) 


// Chapter projects
// Evaluating a number game

// let val = prompt("Enter a number")
// val = Number(val)

// let num = 100
// if(val >= num){
//     console.log(`Your number ${val} is greater than ${num}`)
// }else if(val < num){
//     console.log(`Your number ${val} is less than ${num}`)
// }else if(val == num){
//     console.log(`Your number ${val} is equal to ${num}`)
// }else{
//     console.log("Enter just number")
// }


// Friend checker game
// let frnd = prompt("Enter a Name")
// let output;
// switch(frnd){
//     case "mafia":
//     case "arfa":
//     case "attiya":
//     case "rizwana":
//     output = frnd + " is my friend"
//     break;
//     default:
//         output = "I don't know " + frnd
// }
// console.log(output)

// Practice exercise 5.1
// let max = 10;
// let randomNumber = Math.floor(Math.random() * max ) + 1;

// console.log(randomNumber)


// let trackNum = false;
// while(!trackNum){
//     let guess = prompt('Guess a number between 1 - ' + max)
//     guess = Number(guess);

//     if(guess === randomNumber){
//         trackNum = true;
//         console.log('You got it ' + randomNumber);

//     }else if(guess > randomNumber){
//         console.log('too high')
//     }else{
//         console.log('too low')
//     }

// }

// Practice exercise 6.2
// let adj = ['beautiful', 'inteligent', 'pretty']
// function askName(){
//     let inpt = prompt('What is your name?');
//     let adjName = Math.floor(Math.random() * adj.length);
//     console.log(adj[adjName] + " " + inpt)
// }
// askName()

