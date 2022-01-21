// Introduction to Promise in Javascript

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 'one') 
// }, 5000)


// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 'two') 
// }, 3000)

// // console.log(p1)
// // console.log(p2)

// p1.then((v) => {
//     console.log(v)
// })

// p2.then((v) => {
//     console.log(v)
// })


function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve ('I have got ...')
            } else {
                reject(new Error('I have failed'))
            }
        }, 5000);
    })
}

getIphone(true) 
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e.message)
    })
