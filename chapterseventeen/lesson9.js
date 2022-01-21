// const delay = s => new Promise(resolve => setTimeout(resolve, s*1000))

// delay(2).then(() => console.log('Delay 2 seconds'))
// delay(1).then(() => console.log('Delay 1 seconds'))
// delay(3).then(() => console.log('Delay 3 seconds'))
// delay(4).then(() => console.log('Delay 4 seconds'))


// let p1 = Promise.resolve('test')
// p1.then(v => console.log(v))

// let p2 = Promise.reject('REJECT')
// p2.catch(e => console.log(e))

// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => {
//         console.log(arr)
//     })


let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'One')
})

let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Two')
})

let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, 'Three')
})

let p4 = new Promise(resolve => {
    setTimeout(resolve, 2000, 'Four')
})

let promiseArr = [p1, p2, p3, p4]
// Promise.all(promiseArr)
//     .then(arr => console.log(arr))

Promise.race(promiseArr)
    .then(arr => console.log(arr))