// function makeWords(text) {
//     let str = text.trim()
//     let words = str.split('  ')

//     return words
// }

// let word = makeWords(59)
// console.log(word)

// Instead of 

function makeWords(text) {
    try {
        let str = text.trim()
        let words = str.split('  ')

        return words
    } catch(e) {
        // console.log(e.message)
        // console.log(e)
        console.log('Please provide String....')
    }
}

let word = makeWords(59)
console.log(word)