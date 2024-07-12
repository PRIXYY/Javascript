const a = []

//an empty string in a if case is considered false whereas an empty array is considered as true
//therefor some values are presumed as true some as false and hence the term truthy and falsy values

if (a) {
    console.log(1);
}
else{
    console.log();
}

//Falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//Truthy values
// "0" ,'false', " " , [] , {} , function(){} , 

//Nullish Coaleascing Operator (??) : null / undefined
// if the first input is null or undefined it will return the second one 
let val1 = 5 ?? 10    // here both the input are good so it will return the first input
console.log(val1);
let val2 = null ?? 12
console.log(val2); 
let val3 = null ?? undefined
console.log(val3);  // it returned undefined

// Terniary Operator

//condition ? true : false

2 != 3 ? console.log(true): console.log(false);
