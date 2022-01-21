// Async Await in Javascript

// function myPromise() {
//     return Promise.resolve('Test Value')
// }

// console.log(myPromise())


// async function test() {
//     return 'test'
// }

// // console.log(test())

// test().then(v => alert(v))


// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 3000, 'Test Value')
// })

// async function myAsyncFunc() {
//     let v = await p1
//     console.log(v)
// }

// myAsyncFunc()


// async function fetchData() {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')

//     let data = await res.json()


//     let names = data.map(u => console.log(u.name))
//     console.log(data)
//     } catch(e) {
//         console.log(e.message)
//     }
// }

// fetchData()


let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(4)]

async function promiseAll() {
    let result = await Promise.all(promises)
    console.log(result)
}

promiseAll()