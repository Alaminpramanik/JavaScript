console.log('I am line 1')

setTimeout(() => {
    console.log('I am line 2')
}, 3000)

setTimeout(() => {
    console.log('I am line 3')
}, 0);

console.log('I am line 4')

setTimeout(() => {
    console.log('I am line 5')
}, 1000);
