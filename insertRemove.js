var arr = [1, 2, 3, 4, 5, 6, 7, 8]

//arr[3] = 9
//arr.push(9)       //add last element
//arr.unshift(9)   //add 1st element

arr.splice(3, 0, 9,10)      //at a time remove,add any position
// arr.pop()     //remove last element
//arr.shift       //remove 1st element


console.log(arr)