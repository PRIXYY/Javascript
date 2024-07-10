// Singleton 

// object literals

const mysym = Symbol("key1") 

const user ={
    name:"Preet",
    age: 20,
    [mysym] : "mykey1",  // only way to use symbol in a object
    location : "Jaipur",
    isLoggedIn : true,
    lastlogindays : ["Monday" , "Saturday "]
}

//two ways to access the elements
console.log(user.age);

console.log(user["location"]);  // input given as a string

user.age = 19   // to change values

//Object.freeze(user)  // after this no changes can be made in the object there will be no error when you try to change something but changes will not happen

user.city = "Jaipur";
console.log(user);

user.greeting = function(){
    console.log(`Hello the name in this object is ${this.name}`);  // whenever you want to access the property of current object use this function
}

//console.log(user.greeting);  // this will just say that there is a funcion not knowing what is in there
console.log(user.greeting()); // this will perform the function