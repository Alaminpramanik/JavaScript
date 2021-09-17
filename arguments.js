// function add(a, b) {
//     var result = a + b
//     console.log(result)
// }

// add(3, 2)
// add(5, 10)


// function sub(x, y) {
//     var result = x - y
//     console.log(result)
// }

// sub(10, 5)
// sub(20, 10)

// var arr1 = [1, 3, 4, 5]
// var arr2 = [5, 6, 7, 8]
// var arr3 = [9, 3, 6]

// var sum1 = 0

// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }
// console.log(sum1)

// var sum2 = 0

// for (var i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i]
// }
// console.log(sum2)

// var sum3 = 0

// for (var i = 0; i < arr3.length; i++) {
//     sum3 += arr3[i]
// }
// console.log(sum3)

// function add(arr) {
//     var sum = 0

//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// add(arr1)
// add(arr2)

// function test() {
//     console.log(arguments)

// }
// test(10,20,30)


// function test() {
//     for(var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// test(10, 20, 30)

function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(1, 3, 5,6)
addAll(1, 3, 6, 7, 8, 9)