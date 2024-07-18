console.log("Ashi jutt")
// Practice exercise 2.1
// let str1 = 'Laurence';
// console.log(typeof(str1))
// let str2 = "Svekis";
// console.log(typeof(str2))
// let val1 = undefined;
// console.log(typeof(val1))
// let val2 = null;
// console.log(typeof(val2))
// let myNum = 1000;
// console.log(typeof(myNum))


// Practice exercise 2.2
// let fname = "Ashi"
// let age = 20
// let message = "I can code Javascript."

// console.log(`Hello, my name is ${fname}, I am ${age} years old and ${message}`)

// Practice exercise 3.1
let shoppingList = ['Milk', 'Bread', 'Apples']
// console.log(`Length of shoppingList ${shoppingList.length}`)
shoppingList[1] = "Bananas"
// console.log(shoppingList)

// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
let shoping_List = [];

// 2. Add Milk, Bread, and Apples to your list.
shoping_List.push("Milk", "Bread", "Apples");

// 3. Update "Bread" with Bananas and Eggs.
shoping_List.splice(1,1,'Bananas, Eggs')

// 4. Remove the last item from the array and output it into the console.
shoping_List.pop()

// 5. Sort the list alphabetically.
shoping_List.sort()

// 6. Find and output the index value of Milk.
// console.log(shoping_List.indexOf('milk'))
shoping_List.splice(1, 0, 'Carrots', 'Lettuce')
// console.log(shoping_List)
let shoping_List2 = ['juice', 'Pop']
let shoping_List3 = shoping_List.concat(shoping_List2)
// console.log(shoping_List3)
// console.log(shoping_List3.indexOf('Pop'))


// Practice exercise 3.3
let originalArr = [1,2,3]
let nestedArr = [originalArr, originalArr, originalArr]
// console.log(nestedArr[0][1])

// Practice exercise 3.4
let myCar = {
    make: "BMW",
    model: "Camry",
    year: 2020,
    isElectrics: false,
}

let propertyToUpdate = "color";

myCar[propertyToUpdate] = "red"
// console.log(myCar)
propertyToUpdate = "forSale"
// console.log('myCar2',myCar)
myCar[propertyToUpdate] = true;
// console.log('myCar3',myCar)
// console.log("make :", myCar.make)
// console.log("model :", myCar.model)
// console.log("forSale :", myCar.forSale)

// Practice exercise 3.5
let people = {
    friends: []
}

let obj1 ={
    fName: "Mafia",
    lName: "Rafi",
    id: 1
}
let obj2 ={
    fName: "Attiya",
    lName: "Zainib",
    id: 2
}
let obj3 ={
    fName: "Arfa",
    lName: "Afzal",
    id: 3
}
people.friends.push(obj1, obj2, obj3)
// console.log(people.friends)


// Practice exercise 4.1

let myVariable = false;
// console.log(myVariable)
//first Method
if(myVariable){
    // console.log('Yes this is true')
}
if(!myVariable){
    // console.log("this is false")
}

//2nd Method
if(!myVariable){
    // console.log('This is TRUE')
}
else{
    // console.log('This is FALSE')
}

let age = 10;
let cost = 0;
let message;

if(age < 3){
    cost = 0
    message = "Access is free under three"
}else if(age >= 3 && age < 12){
    cost = 5
    message = "With the child discount, the fee is 5 dollars"
}else if(age >= 12 && age < 65){
    cost = 10
    message = "A regular ticket costs 10 dollars."
}
else{
    cost = 7
    message = "A ticket is 7 dollars.";
}

// console.log(message);
// console.log("Your total cost " +cost);

// Practice exercise 4.2 ===> in app.js file

// Practice exercise 4.3
let id = false
//  !id ? console.log("You can come in karachi") : console.log("You can't come in karachi")



// Chapter project
// Miles-to-kilometers converter
let numberOfMiles = 130
let oneMile = 1.60934
let valInKm = numberOfMiles * oneMile
// console.log(`The distance of ${numberOfMiles} kms is equal to ${valInKm}`) 

// BMI calculator
let inches = 72
let pounds = 180
let weight = pounds / 2.2046 //in kilos
let height = inches * 2.54
// console.log(weight, height)
let BMI = weight / (height/100 *height/100)
// console.log(BMI)


const theList = ['Laurence', 'Svekis', true, 35, null, undefined]
// console.log(theList)
theList.pop()
// console.log(theList)
theList.shift()
theList.unshift("FIRST")
// console.log(theList)
theList.splice(3,2,'hello World')
// console.log(theList)
theList.splice(2,1, 'MIDDLE')
// console.log(theList)
theList.push('LAST')
// console.log(theList)

// Company product catalog

let inventory = []

let car = {
    name: "BMW",
    model: 2020,
    cost: 20000000,
    quantity: 5
}

let bike = {
    name: "honda",
    model: 2022,
    cost: 200000,
    quantity: 4
}

let cycle = {
    name: "bicycle",
    model: 2021,
    cost: 50000,
    quantity: 2
}

inventory.push(car, bike, cycle)
// console.log(inventory)
// console.log(inventory[2]['quantity'])



// // Practice exercise 4.4

// let randomVal = Math.random()
// randomVal = randomVal * 5

// let inpVal = prompt("Please enter any number between 1- 5")
// switch(inpVal){
//     case 5:
//         console.log("Your value is 5")
//         break;
//     case 4:
//         console.log("Your value is 4")
//         break;
//     case 3:
//         console.log("Your value is 3")
//         break;
//     case 2:
//         console.log("Your value is 2")
//         break;
//     case 1:
//         console.log("Your value is 1")
//         break;
//     default:
//         console.log("Please enter the walue within 5")

// }

// Practice exercise 5.2
let counter = 0;
let step = 5;
do{
    // console.log(counter);
    counter += step
}while(counter <= 10)


// Practice exercise 5.3
let myWork = []
for(let i = 1; i <=10; i++){
    let stat = i % 2 ? 'true' : 'false'
    let obj ={name: `Lesson ${i}`, status: stat}
    myWork.push(obj)
}
// console.log("MyWork====>", myWork)

let arrayOfArrays = []
for(let i = 0; i < 5; i++){
    arrayOfArrays.push([]);
    for(let j = 0; j < 7; j++){
        arrayOfArrays[i].push(j);
    }
}
// console.table(arrayOfArrays)

// Practice exercise 5.4
let myTable = []
let rows = 3
let cols = 5

let countr = 0;

for(let i = 0; i < rows; i++){
    let tempTable = []
    for(let j = 0; j < cols; j++){        
        countr++;
        tempTable.push(countr);
    }
    myTable.push(tempTable);
}
// console.table(myTable)

// Practice exercise 5.5
let grid = []
let numOfcells = 64;
let countrr = 0;
let row;
for(let x = 0; x < numOfcells + 1; x++){
    if(countrr % 8 === 0){
        if(row != undefined){
            grid.push(row);
        }
        row = []
    }    
    countrr++;
    let temp = countrr;
    row.push(temp)
}
// console.table(grid)


let names = ['Ashi', 'jutt', 'naina', 'zam']
for(let name of names){
    // console.log(name)
}


let names1 = ['Ashi', 'jutt', 'naina', 'zam'];
for (let i = 0; i < names.length; i++) {
    // console.log(names1[i]);
}


// Practice exercise 5.6
let array = []
for(let i = 0; i < 10; i++){
    array.push(i + 1)
}
// console.log(array)

for(let x = 0; x < array.length; x++){
    // console.log(array[x])
}
for(let arr of array){
    // console.log(arr)
}

// Practice exercise 5.7

let myCar4 = {
    name: 'BMW',
    model: 2023,
    color: 'white'
}
for(let prop in myCar4){
    // console.log(myCar4)
}
// console.log(myCar4)
let fruits = ['banana', 'mango', 'apple']
for(let fruit in fruits){
    // console.log(fruits[fruit])
}

//2nd method through builtin method Object.keys(name of Object)
for(let key of Object.keys(myCar4)){
    // console.log(key);
}
//3rd
for(let val of Object.values(myCar4)){
    // console.log(val)
}
//4th
for(let i = 0; i < myCar4.length; i++){
    // console.log(myCar4[i] + ":" + myCar4[myCar4[i]])
}
//5th
let arrEntries = Object.entries(myCar4)
// console.log(arrEntries)

// it is returning a two-dimensional array, containing key-
// value pairs. We can loop over it like this
for(const [key, value] of Object.entries(myCar4)){
    // console.log(key, ":", value)
}

// Practice exercise 5.8
let output = '';
let skip = 6;
for(let i = 0; i < 10; i++){
    if(i === skip){
        break;
    }
    output += i
}
// console.log(output)

// Chapter project
// Math multiplication table

let multiplyTable = []

let val = 5;

for(let i = 0; i < val; i++){
    let tempArr = []
    for(let j = 0; j < val; j++){
        tempArr.push(i*j);
    }
    multiplyTable.push(tempArr)
}
// console.table(multiplyTable)

const myArray = [1,5,7];
for(el in myArray){
// console.log(Number(el));
el = Number(el) + 5;
// console.log(el);
}
// console.log(myArray);

// Practice exercise 6.1
function addTwoNums(a, b){
    return a + b;
}
let numOne = 4;
let numTwo = 3;
// console.log(numOne , numTwo);
// console.log(addTwoNums(5,6));


// Practice exercise 6.3
const num1 = 15;
const num2 = 4;
let oprator = "-";

function myFunc(a, b, op){
    if(op == "-"){
        // console.log(a - b);
    }else{
        // console.log(a + b);
    }
}
myFunc(num1, num2 , oprator);


function doingStuff(x){
    // console.log(x)
}
let doingArrowStuff = (x, y) => console.log(x, y);
// doingArrowStuff('Hello' ,'world!')

let arr = ['banana', 'milk', 'bread']
// arr.forEach(e => console.log(e))

function myFunc(x, y, z){
    // console.log(x , y)
}

// console.log(Math.floor((Math.random() * 5) + 1));
const min = 5
const max = 10
// console.log(Math.floor(Math.random() * (max - min + 1) + min))

const myDate = new Date()
// console.log('myDate ===>' ,myDate)
// console.log('toString ===>' ,myDate.toString())
// console.log('toLocaleString ===>', myDate.toLocaleString())
// console.log('toDateString ===>', myDate.toDateString())
// console.log('toTimeString ===>', myDate.toTimeString())
// console.log('toLocaleTimeString ===>', myDate.toLocaleTimeString())
// console.log('toJSON ===>', myDate.toJSON())
// console.log('toISOString ===>', myDate.toISOString())
// console.log('toUTCString ===>', myDate.toUTCString())
 let myCreatedDate = new Date("07-3-2024")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp.toLocaleString())
// console.log(
//     myTimeStamp.toLocaleString('default', {
//         weekday: 'long',
//     })
// )

// Practice exercise 6.4
let my_array = []
for(let i = 0; i < 10; i++){
    let val1 = 5 + i;
    let val2 = i * i;
    let res = myFunc(val1, val2, "+");
    my_array.push(res);    
}
// console.log(my_array);
function myFunc(param1, param2, op){
    if(op == "-"){
        return param1 - param2;
    }else{
        return param1 + param2
    }
}


