const arr = ["flash","batman","aquaman"]

const values = arr.forEach( (item) =>{
    console.log(item);
}  )

//the for each does not return so of you want to store any value you can't


//Filter 
const arr1 = arr.filter((i) => i != "flash" )
console.log(arr1);


// const arr12 = arr.filter((i) => {
//     i != "flash"    //if you use parenthesis you will not get any output as in this case you have to specifically write return
// } )
// console.log(arr12);

