//0-sunday,  1- monday, 2- tuesday


var date = new Date()
var today = date.getDay()

switch(today) {
    case 0:
        console.log('today is sunday')
        break
    case 1:
        console.log('today is monday')
        break
    case 2:
        console.log('today is tuesday')
        break
    case 3:
        console.log('today is wednesday')
        break
    case 4:
        console.log('today is thusday')
        break
    case 5:
        console.log('today is friday')
        break
    case 6:
        console.log('today is suterday')
        break
}