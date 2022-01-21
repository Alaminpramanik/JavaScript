// Loop Throw HTML Collections

let item = document.getElementsByTagName('li')

// convert to an Array

// let items = Array.from(item)
// let items = Array.prototype.slice.apply(item)
let items = [...item]

// Loop

items.forEach((li, ind) => {
    let text = li.innerHTML
    li.innerHTML = `(${ind + 1}) ${text}`
})