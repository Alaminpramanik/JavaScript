// Event Delegation in DOM Manipulation

let btn = document.getElementById('btn')

let list = document.getElementById('list')

btn.addEventListener('click', function(e) {
    // alert('I am clicked')

    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'newline create'
    list.appendChild(item)

});

// Event Delegation problem
// [...list.children].forEach(li => {
//     li.onclick = function (e) {
//         e.target.remove()
//     }
// })

list.addEventListener('click', function(e) {
    // console.log(this.contains(e.target))

    if(this.contains(e.target)) {
        e.target.remove()
    }
})