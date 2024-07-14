//The for of loop was not working on object so there comes the for in loop
const obj = {
    a : "Preet",
    b : "Anwoy",
    c : "Amogh"
}
for (const key in obj) {
   console.log(`${key} is ${obj[key]}`);
}

let arr = ["flash","batman","aquaman"]
for (const key in arr) {
    console.log(`The array has ${arr[key]}`);   //an array also has keys which is the index so when you print only keys you get index
    
}
