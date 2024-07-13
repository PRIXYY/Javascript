// for of operator
arrays = [1,2,3,4,5]
for (const array of arrays) {
    console.log(array);
}
//similar to loop in python

//maps 
const mapp = new Map()
mapp.set(1,"Preet")
mapp.set(2,"Anwoy")
mapp.set(3,"Amogh")

console.log(mapp);

//values will be unique and when you put duplicate values they don't show up

for (const [key,value] of mapp) {   //way to access key and values in mapp
    console.log(key, ':-' , value);
}

//object cannot be iterated using the the above mehtod
