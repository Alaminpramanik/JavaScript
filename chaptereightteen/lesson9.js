// Update and Remove any DOM Elements

let li = createElement('li', 'list-group-ietm', 'Four')
// li.setAttribute('title', 'forth attribute')

let list = document.getElementById('list')
list.appendChild(li)

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}

let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + '(Modified)'
    firstChild.classList.add('text-success')
    firstChild.style.background = 'black'
}, 3000);

setTimeout(() => {
    list.lastChild.remove()
}, 3000);