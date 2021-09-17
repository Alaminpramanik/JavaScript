var addition = function(a, b) {
    return a + b
}
addition(20, 30)


setTimeout(function() {
    console.log('I will call after 3 second')
},3000)

var another = addition(7, 8)
console.log(another)