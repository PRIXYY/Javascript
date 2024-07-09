// Array

const myarray = [0,1,2,3,4,5]
console.log(myarray[0]);  // can be accessed using indexing 

const myheroes = ["preet","anwoy","amogh"]

const newmethod = new Array(1,2,3,4)

//Array mehtods

myarray.push(6)
myarray.push(7)
myarray.pop()  // removes last element
console.log(myarray)

myarray.unshift(9) // puts an element on the starting of the array
myarray.shift() // removes first element
console.log(myarray.includes(1)); // gives boolean value
console.log(myarray.indexOf(1)); // gives index
const  narray = myarray.join()  //converts the array in string format ,seperated
console.log(narray)


// slice and spice


const myn1 = myarray.slice(1,3)  //does not affect original array works from given starting input to n-1 ending input
console.log(myn1)
console.log(myarray);

const myn2 = myarray.splice(1,3)  // effects the original array removes the element form given starting input to ending input including the last one 
console.log(myn2)
console.log(myarray);







