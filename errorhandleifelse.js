// let n = Number.parseInt('afhkha')
// console.log(n)

// Instead of

function changeToInt(v) {
    let result = Number.parseInt(v) 
    if(!result) {
        return 'Pleasr provide a intiger number'
    }
    return result
    
}

let result = changeToInt('dfkg')
console.log(result)