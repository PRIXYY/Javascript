const arr = ["flash","batman","aquaman"]

//for each

arr.forEach( function (item){
    console.log(item);
} )

//another function can be given as a input in the above
function constt(item){
    console.log(item);
}

arr.forEach(constt)
arr.forEach( (item,index,arr)=> {  //there are many inputs that can be given
    console.log(item,index,arr);
} )

const lang = [{
    language : "English",
    Origin : "Britain",
},
{
    language : "Hindi",
    Origin : "India",
},
{
    language : "Russian",
    Origin : "Russia",
}]
//accessing objects inside an object
lang.forEach( function(item){
    console.log(item.Origin);
})