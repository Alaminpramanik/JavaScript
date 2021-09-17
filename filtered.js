var arr = [1, 2, 3, 4,5, 6, 7]

// var filteredArr = arr.filter(function(value,) {
//     return value%2 ==1
// })

// console.log(filteredArr)

function myFilter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}