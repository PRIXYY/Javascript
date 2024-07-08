const score = 400

const balance = new Number(180)
console.log(balance) // gives output as object number

console.log(balance.toString().length) // after converting to string the function of string type like length can be used
console.log(balance.toFixed(2));  //very useful as somtimes the precision value has so many digits after decimal

const ono = 112.8976
console.log(ono.toPrecision(3)); //focuses on starting 3 digits ,gives output as string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //GIVES INDIAN DECIMAL SYSTEM


//+++++++++++++++++ Maths ++++++++++++++++++++++++//
// it is a library
console.log(Math.abs(-8))
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); // rounds off to upper limit
console.log(Math.floor(4.6)); // rounds off to lower limit 
console.log(Math.max(4,6,5,7)); // rounds off to lower limit 
console.log(Math.min(4,6,1,9)); // rounds off to lower limit 

//Random function
console.log(Math.random()*10); //gives value between 0-1 but when *10 we will get from 0-10
console.log((Math.random()*10)+1); // to avoid getting 0 we do this 

// function if we want random values in a range
const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1 )) +min );  //wil always come in range
