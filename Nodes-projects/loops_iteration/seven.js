const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNums.map( (num) => (num + 10 ))
// console.log(newNum)

//chaining

const newNumbs = myNums
                .map((num) => num + 5) 
                .map((num) => num * 2)
                .filter((num) => num >= 40)
console.log( "newNumbs ====>" , newNumbs)