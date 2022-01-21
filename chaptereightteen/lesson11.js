// Deal with Attributes in DOM Manipulation


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

let lastItem = list.lastElementChild.cloneNode()
lastItem.innerHTML = 'Four'
list.appendChild(lastItem)

let lastItems = list.lastElementChild.cloneNode()
lastItems.innerHTML = 'Five'
list.appendChild(lastItems)


// console.log(list.attributes)
// console.log(list.getAttributeNames())
// console.log(list.getAttributeNode('class'))
// console.log(cont.getAttribute('class'))

// console.log(list.classList)

// lastItems.id = 'last-Items'

// lastItems.setAttribute('id', 'last-Items')

let attr = document.createAttribute('title')
attr.value = 'I am Five'

lastItems.setAttributeNode(attr)