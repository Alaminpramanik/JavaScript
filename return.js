// function addAll() {
//     var sum = 0
//     for(var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// var result = addAll(1, 2, 3)
// console.log(result)


//Return a Function from Another Function in Javascript

// function greet(msg) {
//     function greetings(name) {
//         return msg + ',' + name + '!'
//     }
//     return greetings
// }

// var gm = greet('Good Morning')

// var msg = gm('AL Mamun')

// console.log(msg)

function base(b) {
    return function(n) {
        var result = 1
        for(var i = 1; i < b; i++) {
            result *= n
        }
        return result
    }
}
var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(4))