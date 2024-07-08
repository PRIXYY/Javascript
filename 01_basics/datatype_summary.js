// Two basic types of datatypes
// =>Primitive 
// 7 types : String , Number , Boolean , null ,undefined , Symbol ,BigInt

//Symbol : it gives unique o/p for every input 
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);// it will give false because everytime symbol gives unique o/p

// =>Reference Type (Non primitive data type)
// Array , Objects , Functions 
 const heroes = ["Iron Man" , "Hulk" , "Thor"]  //Array
 let myObj = {                                    // objects 
    name : "Preet",
    age : "20",
 }

 const myfun = function(){                  // function
    console.log("Hello world")
 }

/////////Stack and Heap 
//Stack (primitive data types)
let name = "Preet"
let another_name = name
another_name =  "Anwoy"
console.log(name)
console.log(another_name);
//Here when stored in stack copy is given in another_name so name does not change when we change another_name

//Heap used by non primitive data types
let userone = {
   email : "user@google.com",
   id:12
}

let usertwo = userone
usertwo.id = 13

console.log(userone.id);
console.log(usertwo.id);
//Here both will change to 13 as heap gives direct reference pointer no copy unlike stack is given to usertwo 
//So when you change usertwo userone also changes as both point to the same thing

