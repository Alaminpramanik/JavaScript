let form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    // console.log(this.length)

    let isValid = false

    let data = {}
    ;[...this.elements].forEach(el => {
        // console.log(el.type, el.name, el.value)
        if(el.type !== 'submit') {

            isValid = validator(el)
            if (isValid) {
                data[el.name] = el.value
            } else {
                el.classList.add('is-invalid')
                alert(`${el.name} is required`)
            }
        }
    })
    if (isValid) {
        console.log(data)
        this.reset()
    }
})


// Form Validation in DOM in Javascript 

function validator(el) {
    if(!el.value) {
        return false
    }

    return true
}
