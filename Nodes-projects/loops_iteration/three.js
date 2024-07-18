//for of loop
//array specific loops

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for(let num of arr) {
    // console.log(num)    
}

const greetings = "Hello World!"
for(let greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps
const map = new Map()
map.set('Pak', 'Pakistan')
map.set('USA', 'United state of America')
map.set('Fr', 'France')
console.log(map)

for (const [key, value] of map) {
    console.log(`${key} :-  ${value}`)   
}