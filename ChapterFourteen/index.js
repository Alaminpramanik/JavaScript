// function Shape() {

// }

// Shape.prototype = {
//     common: function() {
//         console.log('I am Common methods')
//     }
// }


// function Square(width) {
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)

// Square.prototype.draw = function() {
//     console.log('Drawing')
// }


// var shape = new Shape()
// var sqr = new Square(45)

//shape --> Shape --> Object
//sqr --> Square --> Object

//sqr --> Square --> Shape --> Object


// function Circle() {

// }

// Circle.prototype = Object.create(Shape.prototype)

// var circle = new Circle()
// console.log(circle)


// Reset Constructor After Inheritance in Javascript

// function Shape() {
    
// }

// Shape.prototype.common = function() {
//     console.log('I am Common methods')
// }


// function Square(width) {
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// Square.prototype.draw = function() {
//     console.log('Drawing')
// }


// var shape = new Shape()
// var sqr = new Square(45)

//Calling super with Call method in Javascript
// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function() {
//     console.log('I am Common methods')
// }


// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// Square.prototype.draw = function() {
//     console.log('Drawing')
// }


// // var shape = new Shape()
// var sqr = new Square(45, 'green')


//Creating Extends Function in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function() {
//     console.log('I am Common methods')
// }


// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }

// Shape.prototype.draw = function() {
//     console.log('Drawing')
// }

// // Square.prototype = Object.create(Shape.prototype)
// // Square.prototype.constructor = Square
// extend(Shape, Square)


// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }

// // Circle.prototype = Object.create(Shape.prototype)
// // Circle.prototype.constructor = Circle
// extend(Shape, Circle)

// var circle = new Circle(5, 'Red')
// console.log(circle)

// var shape = new Shape()
// var sqr = new Square(45, 'green')


//Method Overriding in Javascript
// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function() {
//     console.log('I am Common methods')
// }


// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }

// Shape.prototype.draw = function() {
//     console.log('Drawing')
// }

// // Square.prototype = Object.create(Shape.prototype)
// // Square.prototype.constructor = Square
// extend(Shape, Square)


// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }

// // Circle.prototype = Object.create(Shape.prototype)
// // Circle.prototype.constructor = Circle
// extend(Shape, Circle)


// //Overriding
// Circle.prototype.common = function() {
//     Shape.prototype.common.call(this)  //parent common method
//     console.log('I am Overriding')
// }
// var circle = new Circle(5, 'Red')
// console.log(circle)

// var shape = new Shape()
// var sqr = new Square(45, 'green')


// //Polymorphism in Javascript
// var arr = [shape, sqr, circle]

// for(var i of arr) {
//     i.common()
// }




//Inheritance and Composition Mixing in Javascript
function mixin(terget, ...sources) {
    Object.assign(terget, ...sources)
}

var canWalk = {
    walk: function() {
        console.log('walking...')
    }
}

var canEat = {
    eat: function() {
        console.log('Eating...')
    }
}

var canSwim = {
    swim: function() {
        console.log('Swimming...')
    }
}

//Object literal

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'Almamun'
// console.log(person)

function Person(name) {
    this.name = name
}
//if u want skip name,put empty function

// Object.assign(Person.prototype, canEat, canWalk)
mixin(Person.prototype, canEat, canWalk)

var person = new Person('Al Mamun')
console.log(person)

function GoldFish() {

}
mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish()
console.log(fish)