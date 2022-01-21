let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')

const URL = 'https://jsonplaceholder.typicode.com/posts'


postForm.addEventListener('submit', function(e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if(title && body) {
        let postObj = {
            userId = 100,
            title,
            body

        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })

        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => console.log(e))

    } else {
        alert ('Provide every details')
    }
})



// Else DOM Lists

// 1.AVG
// 2.Canvas
// 3.Drag & Drop
// 4.Transition
// 5.Location
// 6.Audio, Video
// 7.Speech Recognition 
// 8.Web Socket 
// 9.Local-Storage
// 10.Cookies & Browers Database