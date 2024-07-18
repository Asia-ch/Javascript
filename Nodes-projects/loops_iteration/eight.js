const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce( (acc, curval) => {
    console.log(`acc value : ${acc} and curval value: ${curval}`)
    return acc + curval
}, 2)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Mobile dev",
        price: 74664
    },
    {
        itemName: "Web dev",
        price: 74664
    },
    {
        itemName: "Full dev",
        price: 74664
    },
    {
        itemName: "Data Scientist",
        price: 74664
    },
]
const shoppingCartVal = shoppingCart.reduce((acc, item) => {
    return acc + item.price
    
},0)
console.log(shoppingCartVal)