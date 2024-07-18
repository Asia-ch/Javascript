const userEmail = "A@ashi.ai";
if(!userEmail){
    // console.log("Got user email");
}
else{
    // console.log("Don't have user email");
}

// falsy value
//  false, 0, -0, bigint-0n , "", null, undefined,NaN

// Truthy value
// true, 1, "0", 'false', " ", [], {}, function(){}

let usermail = []
if(usermail.length === 0){
    // console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty")
}


//Nulish coalrscing operator(??) : null undefined

let val1; 
// let val1 = 5 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 34
// val1 = null ?? 10 ?? 20
// console.log(val1)


// Ternary operator
// condition ? true : false
const iceTeaPrice = 100
// iceTeaPrice <=90 ? console.log("less than 80") : console.log("more than 80")