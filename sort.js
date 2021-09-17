var person = [
    {
        name: 'A',
        age: 20
    },
    {
        name: 'B',
        age: 25
    },
    {
        name: 'C',
        age: 15
    }
]

person.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(person)