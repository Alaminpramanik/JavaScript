// Input Box Event Handling in Javascript

let nam = document.getElementById('name')

nam.addEventListener("keypress", function(event) {
    if(event.key == 'Enter') {
        // console.log(e.target.value)
        document.getElementById('show-name').innerHTML = `Your name is ${event.target.value}`
        event.target.value = ''
    }
})


// Check Box Event Handling

let skills = document.getElementsByName('skills')
let result = document.getElementById('result')

let checkedskills = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', function(event) {
        if (event.target.checked) {
            checkedskills.push(event.target.value)
            outputSkills(result, checkedskills)
            // console.log(checkedskills)
        } else {
            let ind = checkedskills.indexOf(event.target.value)
            checkedskills.splice(ind, 1)
            outputSkills(result, checkedskills)
            // console.log(checkedskills)
        }
    })
})

function outputSkills(parent, skills) {
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1}) ${skill}  `
    })
    parent.innerHTML = result
}


// List and Input Event Handler

let list = document.getElementById('list')

list.addEventListener('dblclick', function(event) {
    if(this.contains(event.target)) {
        let innerText = event.target.innerText
        event.target.innerHTML = ''

        let inputBox = createInputBox(innerText)

        event.target.appendChild(inputBox)


        inputBox.addEventListener('keypress', function(e) {
            if (e.key == 'Enter') {
                event.target.innerHTML = e.target.value
            }
        })

    }
    // console.log('Double Click Event')
})

// list.addEventListener('click', function(event) {
//     console.log('Click')
// })

function createInputBox(value) {
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value

    return inp
}