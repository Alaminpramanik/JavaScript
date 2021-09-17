//  var rect = {
//      width: 100,
//      height: 50,

//      draw: function() {
//          console.log('I am a reactangle')
//          this.printProperties()
//          console.log(this)
//      },

//      printProperties: function() {
//         console.log('My width is ' + this.width)
//          console.log('My height is ' + this.height)
//      }
//  }

//  rect.draw()

// rect.height = 100

// rect.draw()



// "THIS" in Javascript 

// function myfunc() {
//     console.log(this)
// }

// new myfunc()


// var another = {
//     width: 70,
//     height: 60,
//     print: rect.printProperties
// }

// another.print()





//Factory pettern


// var creatRect = function(width, height) {
//     return {
//         width: width,
//         height: height,
   
//         draw: function() {
//             console.log('I am a reactangle')
//             this.printProperties()
//             console.log(this)
//         },
   
//         printProperties: function() {
//            console.log('My width is ' + this.width)
//            console.log('My height is ' + this.height)
//         }
//     }
   
// }

// var rect1 = creatRect(10, 5)
// rect1.draw()

// var rect2 = creatRect(15, 13)
// rect2.draw()


// Constructor Pettern

// var Rectangle = function(width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am a reactangle')
//             this.printProperties()
//             console.log(this)
//     }

//     this.printProperties = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// var rect3 = new Rectangle(5, 9)
// rect3.draw()

// var Rect = new Function('width', 'height', `this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am a reactangle')
//             this.printProperties()
//             console.log(this)
//     }

//     this.printProperties = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }`
// )

// var rect4 = new Rect(4, 5)
// console.log(rect4)

// rect4.draw()


//Bind, Call, Apply in Javascript

// function myfunc(c, d) {
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }

// myfunc.call({a: 40, b:25}, 10, 5)
// myfunc.apply({a: 40, b:25}, [5, 10])
// myfunc({})

// var testBind = myfunc.bind({a:5, b:10}, 3, 2)
// testBind()


//Pass By Value vs Pass by Reference in Javascript 
//Call By Value vs Call by Reference in Javascript 

// var n = 10

// function change(n) {
//     n = n + 100
//     console.log(n)
// }

// change(n)
// console.log(n)


// var obj = {
//     a: 5,
//     b: 10
// }

// function changeMe(obj) {
//     obj.a = obj.a + 10
//     obj.b = obj.b + 10

//     console.log(obj)
// }

// changeMe(obj)
// console.log(obj)


//Abstraction in Javascript 


// var Rectangle = function(width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am ...')
//         this.printPropertise()
//         console.log(this)
//     }

//     this.printPropertise = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// var rect5 = new Rectangle(5, 10)
// rect5.draw()


//Private Properties in Javascript 


// var Rectangle = function(width, height) {

//     var position = {
//         x: 56,
//         y: -100
//     }

//     this.width = width
//     this.height = height

//     var printPropertise = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }.bind(this)    //You can also remove this. instead of .bind()

//     this.draw = function() {
//         console.log('I am ...')
//         printPropertise()
//         console.log('Position: X = ' + position.x + 'Y = ' + position.y)
//     }
// }

// var rect6 = new Rectangle(45, 60)   //Remind to write new,, other wise it can't work
// rect6.draw()


//Getter Setter in Javascript


// var Rectangle = function(width, height) {

//     var position = {
//         x: 56,
//         y: -100
//     }

//     this.width = width
//     this.height = height

//     var printPropertise = function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }.bind(this)    //You can also remove this. instead of .bind()


//     // this.getPosition = function() {
//     //     return position
//     // }

//     this.draw = function() {
//         console.log('I am ...')
//         printPropertise()
//         console.log('Position: X = ' + position.x + 'Y = ' + position.y)
//     }

//     Object.defineProperty(this, 'position', {
//         //Getter Javascript
//         get: function() {
//             return position
//         },

        //Setter Javascript
//         set: function(value) {
//             position = value
//         }
//     })
// }

// var rect7 = new Rectangle(45, 60)   //Remind to write new,, other wise it can't work
// rect7.draw()

// console.log(rect7.getPosition())

// rect7.position = {
//     x: 50,
//     y: -150
// }

// console.log(rect7.position)


//Intro to Inheritance in Javascript
//Inheritance = 1. classical Inheritance
//              2. Prototypical Inheritance

//Prototype and Prototypical Inheritance in Javascript 
// Prototype is a parent class

function person(name) {
    this.name = name
}