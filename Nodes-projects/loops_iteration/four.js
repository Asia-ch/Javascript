const myObj = {
    js: 'Javascript',
    rb: 'ruby',
    cpp: 'c++'
}
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming = ['js', 'cpp', 'ruby', 'java']

for (const key in programming) {
    console.log(key)
}

