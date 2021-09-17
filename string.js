// var a = 'I am '
// var b = 'Al Mamun'

// var c = a.concat(b)
//  console.log(c)

// // var d = c.substr(5)
// // console.log(d)

// console.log(c.charAt(5))
// console.log(c.startsWith('I'))
// console.log(c.endsWith('Mamun'))
// console.log(a.toUpperCase())
// console.log(b.toLowerCase())
// console.log('     ghskjghg      '.trim()) //space remover
// console.log(c.split(' '))


//string Length

var str = "name"

var length = 0

while(true) {
    if(str.charAt(length) == '') {
        break
    } else {
        length++
    }
}

console.log(length)

console.log(str.length)