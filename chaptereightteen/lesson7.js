// DOM Manupulation
// Create DOM Elements in Javascript 

// let li = document.createElement('li')

// li.className = 'list-group-item'

// li.setAttribute('title', 'forth attribute')
// li.innerHTML = 'Four'

// let list = document.getElementById('list')
// list.appendChild(li)


let li = createElement('li', 'list-group-ietm', 'Four')
li.setAttribute('title', 'forth attribute')

let list = document.getElementById('list')
list.appendChild(li)


let p1 = createElement('p', 'lead', 'You will improve your reading comprehension and develop your gkhghlklghhg')


let p2 = createElement('p', 'lead', 'You will improve your reading comprehension and develop your gkhghlklghhg')


let div = createElement('div')
append(div, [p1, p2])

let container = document.getElementById('cont')
container.appendChild(div)


function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}