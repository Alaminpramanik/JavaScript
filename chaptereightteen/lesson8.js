// Insert Adjacent Element

let li = createElement('li', 'list-group-ietm', 'Four')
li.setAttribute('title', 'forth attribute')

let list = document.getElementById('list')
list.appendChild(li)


let p1 = createElement('p', 'lead', 'You will improve your reading comprehension and develop your gkhghlklghhg')


let p2 = createElement('p', 'lead', 'You will improve your reading comprehension and develop your gkhghlklghhg')


let div = createElement('div')
append(div, [p1, p2])

list.insertAdjacentElement('beforebegin', div)


function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child))
}