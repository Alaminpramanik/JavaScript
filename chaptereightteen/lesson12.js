// Style in DOM

// let title = document.getElementById('title')

// title.style.color = 'white'
// title.style.backgroundColor = 'gray'
// title.style.fontSize = '4rem'


let styleObj = {
    background: 'black',
    fontSize: '2rem',
    color: 'white'
}

let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(li.style, styleObj))
