const t1 = new Object()  // this is a singleton object
const t2 = {}  // this is a non singleton b object

const t3 = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "Preet",     //nested objects
            lastname : "Vaishnav",
        }
    }
}

console.log(t3.fullname.username.firstname);  // this is how we access the nested objects


const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"b" , 4: "c"}
const obj3 = {5:"c" , 6: "d"}

// to combine these three we do 

const obja = Object.assign({}, obj1 , obj2 , obj3)  // here all the object except the first one go into the first one
const objb = Object.assign(obj1 , obj2 , obj3)  // this can also be done but here all obj 2,3 are merged to 1 which is ok but not preffered raher first mehtod where all are added to an empty object


//another way to combine two operators
const objc = {...obj1, ...obj2};  //spread method
console.log(objc);

// objects in arrays 

users=[{name :"Preet",id:2},{name:"Anwoy",id:4}]

console.log(users[1].id)  //how to access

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty(1)) // whether the following exists or not



//destructuring

const course = {
    coursename : "JS with chai",
    price : 990,
    coursrInstructor : "Hitesh"
}

console.log(course.coursrInstructor); 

//instead of doing this every time we do this

// const {coursrInstructor} = course
// console.log(coursrInstructor);

//you can also do this
const {coursrInstructor : inst} = course
console.log(inst);  
