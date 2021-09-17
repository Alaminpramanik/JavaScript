// var arr = [4, 5, 6, 9]
// var arr2 = [5, 10, 45, 23]

//console.log(arr.join(' '))
// arr.fill(0)

// console.log(arr)

// var arr3 = arr.concat(arr2)
// console.log(arr3)

//console.log(Array.isArray(arr))

// var a = [1, 2]
// var b = Array.from(a)

// b[0] = 5

// console.log(a)
// console.log(b)


var obj = {
    x: 40,
    y: 60,
    z: 75
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

var obj1 = Object.assign({}, obj)
obj1.x = 100

console.log(obj)
console.log(obj1)