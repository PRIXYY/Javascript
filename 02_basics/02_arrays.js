const marvel1 = ["thor", "ironman","spiderman"]
const dc1 = ["superman","flash","batman"]

// marvel1.push(dc1)  // this adds the scond array to the first array as an object as last which is not correct
// console.log(marvel1) 
// console.log(marvel1[3][1]);  // to access those this method is used



// const all_heroes = marvel1.concat(dc1)  // this combines both arrays properly
// console.log(all_heroes);

//another way to add two arrays

const all_heroes1 = [...marvel1 , ...dc1]  //this is spread method
console.log(all_heroes1);

const arraya = [1,2,3,[4,5,6,[4,2,6,[1,9,6]]]]

//now if you want the elements out of the subarray in a single array without any subarrays we do

const array1 = arraya.flat(Infinity)  // its input is the depth with which you want to remove subarrays but we can also put infinity to solve it on all levels
console.log(array1);

console.log(Array.isArray("preet"))  //checking whether the given input is a array or not
console.log(Array.from("preet"));   // converts to a string
console.log(Array.from({name: "preet"}))  // when given a key value pair you have to specify whether you want the key or the pair to convert to array o/w it will return empty string

// to convert anyting to string 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

