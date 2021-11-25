// My first js coding
let name= 'Adnan' // String Literel
console.log(name);

let age = 30;  // Number Literel
let isApproved= false; //Boolean Literel
let lastName=undefined // Undefined Literel
let SelecterColor=null  // null Literel

// object start
let person = {
    name: 'adnan',
    age:25
}

//Dot Notations
person.name= 'Al Amin';

// Bracket Notations
let selection = 'name'
person[selection] = 'Pramanik'
console.log(person.name);
//Object end

// Array  Start

let selectedColors = ['Red', 'Blue'];
selectedColors[2] = 'Green';
console.log(selectedColors.length);
// Array End

// Function Start
// Performin Task
function firstjs(name,lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
firstjs('Adnan', 'Amin');

//Calculating a value
function square(number){
    return number * number;
}

console.log(square(2))

// Function End

// Initialize thes three varieables 
var a = 5;
var b = 10;
var c = 'I am a'

//Don't changes code below this line
a = a+1;
b = b+1;
c = c + 'String!';
