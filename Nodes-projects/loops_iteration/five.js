// ForEach loop

const coding = ['js', 'ruby', 'java', 'python']
// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (val) => {
//     console.log(val)
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: 'Javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})