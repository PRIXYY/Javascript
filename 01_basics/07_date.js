// Dates :it returns output in ms so we convert it into different variation for our comfort
let mydate = new Date()
console.log(mydate); //not so readable format
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toString())

console.log(typeof mydate) // it is an object type

//method to declare your own date
let bdate = new Date(2024, 4 ,2) // first year then month which starts from 0 and then date
console.log(bdate.toDateString());
let wdate = new Date(2024, 4 ,2,4,8) // after ymd there is hour and minute
console.log(wdate.toLocaleString());

let adate = new Date("02-05-2024") 
console.log(adate.toLocaleString());

//Time Stamp
let mytimestamp = Date.now()

console.log(mytimestamp)  // gives time in ms from 1 Jan


console.log(mydate.getMonth())



