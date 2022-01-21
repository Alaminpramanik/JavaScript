// function sayMyName(name){
//     let result
//     setTimeout(() => {
//         result = name
//         console.log('I have done.....')
//     }, 3000);
//     return result
// }

// let output = sayMyName('Al Mamun')
// console.log(output)


// Instead of


// How to Store result from Async Function in Javascript

function sayMyName(name) {
    setTimeout(() => {
        console.log(name)
    }, 3000);
}

let output = sayMyName('Al Mamun')
console.log(output)