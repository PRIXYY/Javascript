function saymyname(){                //way to declare a function
    console.log("Hello World")
}

saymyname()   //way to call a function

function add(number1,number2){
    console.log("The answer is " , number1+number2);

}

add(4,5);

function add1(number1,number2){
    return (number1+number2)    //remember after return line no code will work
    console.log();  //after return line so won't work
}
const y=add1(9,1)
console.log(y);

function loginusermsg(username){             //if you run this function without giving an input it will consider the username as undefined ,so undefined just logged in will show up
    console.log(`${username} just logged in`);
}

function loginusermsg1(username = "Preet"){     //this is a way of giving default values to username now when you call function without giving any input preet will be assumed as username and undefined case will not occur        
    console.log(`${username} just logged in`);
}

function calculatecartprice(...num1){  // when in a function you want to give multuple inputs but you don't know how many so you use raw operator(...) 
    return num1  //it will return a array of inputs you gave
}

console.log(calculatecartprice(2,3,4));

//how to pass a an object in an function

let onv = {
    username:"Preet",
    id:2,
}

function objuse(anyobject){   //the input here has no idea that it is object or not ,you take care of that inside the function like we used a.username,etc
    console.log(`The id ${anyobject.id} has username ${anyobject.username}`)
}

objuse(onv)

//you can also do this 
objuse({
    username:'Ram',
    id : 3,
})

const arr = [1,2,3,4]

function array(anyarray){  //here also anyarray has no idea ot is an array we take care of that inside
    console.log(anyarray[0]);
}


array(arr)