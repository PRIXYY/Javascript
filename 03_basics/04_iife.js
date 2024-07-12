//Immediately Invoked Function Expression (IIFE)
//Why do we use it : to prevent the pollution caused by global scope
// to run a function immediately we use IIFE

(function chai(){
    console.log('DB CONNECTED');
})();   //remember to use semicolon in the end always 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}` );
})('preet')
 