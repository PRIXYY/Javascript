const user = {
    username : "Preet",
    price : 100,
    myfun : function() {
        console.log(`${this.username} has logged in`);
        console.log(this)
    }
}
user.myfun()
user.username = "Anwoy"
user.myfun()
console.log(this);    // here in global there is no context for this so it will reuturn an empty object

//this can only be used inside an object and not in an function

const chai = function(){
    let username = "preet"
    console.log(this.username);    //here this will not work ,only works in an object
}

// Arrow function

const addtwo = (num1 , num2) =>{
    return num1 + num2
}

console.log(addtwo(3,5))


//Another way to write 
const addtwoo = (num1 , num2) => num1+num2   // this is implicit return
console.log(addtwoo(3,5))

//when we want to return an object 
const add2 = (num1,num2) => ({username:"preet"})