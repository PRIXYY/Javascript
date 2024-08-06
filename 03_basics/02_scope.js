var c =400

if(true){
    let a =20
    const b=30
    var c=40
    d=50
}

//console.log(a);  //now this will not print as the scope of a will end in the loop
//console.log(b);  // this also will not print due to same reason
console.log(c);  // this will get printed because the var of scope does not end in the if condition
console.log(d);  //this will also print as its scope will not end in if 

addone(2)         //will not give an error
function addone(num){       //when function is declared like this so when you call a function before its declaring it will not give an error
    return num+1
}


addtwo(3)       //will give an error
const addtwo = function(num){       //when a function is declared like thi you cannot call it before its declaration
    return num +2
}





















//console.log(a);  //now this will not print as the scope of a will end in the loop
//console.log(b);  // this also will not print due to same reason