function sample(a, b, cb) {
    var c = a+b
    var d = a-b

    var result = cb(c, d)
    return result
}

function sum(c, d) {        //this function just call sum function
    return c+d
}

var result = sample(5, 8, sum)
console.log(result)

var result1 = sample(5, 8, function(c, d) {
    return c-d
})
console.log(result1)

var result2 = sample(5, 8, function(c, d) {
    return c*d
})

console.log(result2)

var result3 = sample(5, 8, function(c, d) {
    return c/d
})

console.log(result3)