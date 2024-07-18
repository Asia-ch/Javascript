//Symbol
let symbl_val = Symbol("Symbol Value");

//Object Literals
let jsUser = {
    name: "Zam",
    age: 20,
    color: "white",
    email: "zam@gmail.com",
    [symbl_val]: "Symbolvalue2",
    isLogged: true

}

// console.log(jsUser["email"])
// Object.freeze(jsUser)
jsUser.email = "zamas@gmail.com"
// console.log(jsUser)

jsUser.greet = function(){
    // console.log(`Hello Js user! ${this.name}`)
}
// console.log(jsUser.greet())

//Object's second type constructor (Singleton)

let objc = new Object()  //Singlton object
let obj = {}  //Non-singlton

// obj.id = "124asd"
// obj.name ="Zam",
// obj.isLogged = false,

// console.log(obj)

let regularUser = {
    email: "zam@gpt.com",
    fullname: {
        userFullName:{
            fName: "Zam",
            lName: "Ash",
        }
    }
}
// console.log(regularUser.fullname.userFullName.fName)

const objc1 = {1: "a", 2: "b"}
const objc2 = {3: "c", 4:"d"}
let objc3 = Object.assign(objc1, objc2)
let objc4 = Object.assign({}, objc1, objc2)
// console.log("objc3 ===>", objc3)
// console.log("objc4 ===>", objc4)

//Better opetin is spread
let objc5 = {...objc1, ...objc2}
// console.log(objc5)

// console.log(Object.keys(objc1))
// console.log(Object.values(objc1))
// console.log(Object.entries(objc1))

// console.log(objc1.hasOwnProperty(1))


//Destructuring
const course = {
    coursename: "JS in urdu",
    price: "999",
    courseInstructor: "Naina"
}

// console.log(course.courseInstructor)
// const {courseInstructor} = course

const {courseInstructor: instructor} = course
// console.log(instructor)

//Destructuring in React Js
const navbar = ({company}) =>{

}
navbar(company = "Zam")


//JSON
// {
//     'name': "Ashi",
//     'coursename': "JS",
//     'price': "free"
// }


//functions

// function addTwoNums (num1, num2) {
//     console.log(num1 + num2)
// }
// const result = addTwoNums(2,3)

//if i store addTwoNums value in a variable i will not get their sum value
//Why??
//because i did not return any value

//so how i will get 

function addTwoNums (num1, num2) {
        // console.log(num1 + num2)
    }
    const result = addTwoNums(2,3)

    //Nested scope
   function one(){
    const name = "Ashi"

    function two(){
        const website = "Youtube"
        // console.log(name)
    }
    // console.log(website)

    two()

   }
   one()
   //nested scope in loops
   if(true){
    const fname = "Ashi";

    if(fname === "Ashi"){
        const lname = " jutt"
        // console.log(fname + lname)
    }
    // console.log(lname)

   }
// console.log(fname)



//How can access functions
addone(5)
function addone (num){
    return num + 1
}

// addtwo(5)
const addtwo = function(num){
    return num + 2
}

//this in js
const user = {
    name: "Zam",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.name}, welcome to website`)
        // console.log(this)
    }
}
user.welcomeMessage()
user.name = "Nain"
user.welcomeMessage()
// console.log(this)

//this didn't work in function
// function chkthis (){
//     let usname = "Ashii"
//     console.log(this.usname)
// }
// chkthis()


const chkthis = () =>{
    let usname = "Ashii"
    // console.log(this)
}
chkthis()

//basic arrow function  ---- explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(3,5))

//implicit return
const add_Two = (num1, num2) =>  num1 + num2
// if used {} we can use return keyword but in () we won't use return
const add$Two = (num1, num2) =>  (num1 + num2)
//but in object how we will return value?
const obj1 = (num1, num2) =>  ({name: "Ashi"});
// console.log(obj1())
// console.log(addTwo(3,5))

//Immediately Invoked Function Expressions(IIFE)
(function chk(){
    //named IIFE
    console.log('DB CONNECTED');
})();

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
})('Ashii')