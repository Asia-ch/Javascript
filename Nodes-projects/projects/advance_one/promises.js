const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is setTimeout of promises')
        resolve();
    }, 2000)
})

promiseOne.then(function () {
    console.log('Async is resolved 1')
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is 2nd setTimeout")
        resolve();
    }, 1000)
}).then(() => {
    console.log("Async is resolved 2")
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ user: 'Ashi', email: 'ashi@example.com' })
    }, 3000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Ashi', password: '123' })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.password
}).then((password) => {
    console.log(password)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Ashi Jutt', password: '12345' })
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonholder.typicode.com/users')
//         const data = response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log('Error', error)
//     }
// }

// getAllUsers()

fetch('https://jsonholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => console.log(error))