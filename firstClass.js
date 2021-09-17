// First Class Functiion

function add(a, b) {
    return a+b
}
//1.A function can be stored in a variable
var sum = add
console.log(sum(4, 5))
console.log(typeof sum)

//2.A function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))


//3.A function can be stored in an Object
var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(7, 8))

//4.We can creat Function as we need
setTimeout(function() {
    console.log('I have .....')
},1000)


//5.We cav pass Function as an Arguments
//6.We can return Functions from Another Function