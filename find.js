var arr  = [1, 2, 3, 4, 5]

// var result = arr.find(function(value) {
//     return value == 3
// })

// console.log(result)

// var result = arr.findIndex(function(value) {
//     return value == 3
// })

// console.log(result)

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb (arr[i])) {
            return arr[i]
            //return i
        }
    }
}

var result = myFind(arr, function(value) {
    return value == 5
})

console.log(result)