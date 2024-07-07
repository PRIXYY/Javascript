let score = 33

console.log(typeof score);

let score1 = "33"
console.log(typeof score1);

let valueinno = Number(score1) //converted string to no
console.log(typeof valueinno)

//But what if we convert a string like 33abc to no ?

let score2 = "33abc"
let value2 = Number(score2) 
console.log( typeof value2);
//it will still convert to no but when you check the value of that converted no it will show NAN
console.log(value2)

let score3 = null
// when you convert this to a number and print this it will show 0
let value3 = Number(score3) 
console.log( value3);
// similarly when you put undefined it will show NaN
//and when you put boolean like true it gets converted to value 1
//also when you convert a string to number and try to find its value it gives NaN

let isloggedin = 1
let booltono = Boolean(isloggedin)
console.log(booltono);
// 1=> true
// 0 =>false
// empty strings => false
//"Preet" => false

let someno= 33
let stringno = String(someno)
console.log(typeof stringno);
console.log(stringno);