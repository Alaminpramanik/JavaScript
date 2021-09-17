var arr = [4, 5, 6, 9, 1, 3]

// for(var i = 0; i < arr.length; i++) {
//     // console.log(arr[i])

//     arr[i] = arr[i] + 2
// }
// console.log(arr)

// sum = 0
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0) {
//         console.log(arr[i])
//     } 
// }

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0) {
//         console.log(arr[i])
//     }
// }


// sum = 0
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum)

sum = 0             //even numbers sum
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) {
        sum += arr[i]
    }
}
console.log(sum)