//Intro to Inheritance in Javascript
//Inheritance = 1. classical Inheritance
//              2. Prototypical Inheritance

//Prototype and Prototypical Inheritance in Javascript 
// Prototype is a parent class

// function person(name) {
//     this.name = name
// }
// var p1 = new person('Al Mamun')
// console.log(p1)


//Property Descriptor in Javascript

// var person = {
//     name: 'Al Mamun'
// }

// console.log(person)

// for(var i in person) {
//     console.log(i)
// }

// console.log(Object.keys(person))

// var Descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(Descriptor)

// let baseobj = Object.getPrototypeOf(person)
// let Descriptor = Object.getOwnPropertyDescriptor(baseobj, 'toString')
// console.log(Descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'Pramanik'
// })



// Constructor Prototype in Javascript


// function person(name) {
//     this.name = name
// }


// person.prototype.PI = 3.1416
// var p1 = new person('Al Mamun')

// let baseobj = Object.getPrototypeOf(p1)
// console.log(baseobj)

// var p1 = new person('Al Mamun')
// var p2 = new person('Mamun')

// console.log(p1)
// console.log(p2)



// Instance vs Prototype Members in Javascript 

// function Squar(width) {
//     this.width = width
// }

// Squar.prototype = {
//     draw: function() {
//         console.log('Draw')
//     },

//     toString: function() {
//         return 'My width is ' + this.width
//     }
// }

// var sqr1 = new Squar(10)
// var sqr2 = new Squar(5)



//Using Instance and Prototype Members in Javascript


function Squar(width) {
    this.width = width
    this.getWidth = function() {
        console.log('width is ' + this.width)

        // this.draw()
    }
    
}


Squar.prototype = {
    draw: function() {
        this.getWidth()
        console.log('Draw')
    },

    toString: function() {
        return 'My width is ' + this.width
    }
}


var sqr1 = new Squar(10)
var sqr2 = new Squar(5)

//Iterate Object and HasOwnProperty in Javascript

console.log(Object.keys(sqr1))