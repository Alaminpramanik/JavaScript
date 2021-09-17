var a = 'abc'           //Global Scope

// if (true) {
//     console.log(a)
// }

// Accessing out side of condition

// if (true) {
//     if (true) {
//         var b = 'I am Almamun'
//     }
// }

// console.log(b)

function x() {
    var a = 20
    function y() {
        var a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()



function test(n) {
    function a() {
        return n%3 ==0
    }

    function b() {
        return n%5 ==0
    }

    if (a() && b()) {
        console.log(n + ' is Divideable')
    } else {
        console.log('Not a Valid Number')
    }
}

test(15)