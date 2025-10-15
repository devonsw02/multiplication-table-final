console.log('Here\'s a for loop showing 1...10:\n')
for (let i = 0; i < 10; i++) {
    console.log(`${ i }\n`)
}



console.log('Here\'s a do-while loop showing 1...10:\n')
let i = 0
do {
    console.log(i + '\n')
    i++
} while (i < 10)



console.log('Here\'s a while loop showing 1...1000:\n')
let reagan = 0
while (reagan < 1000) {
    console.log(`${ reagan }\n`)
    reagan++
}



console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n')
let nums = [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${ num }\n`)
})