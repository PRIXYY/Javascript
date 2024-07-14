//Map
const mynum = [1,2,3,4,5,6]
const mynum2 = mynum.map((int) => int +10)
console.log(mynum2);

const mynum3 = mynum.map((int) => int +10).map((int) => int +10)
console.log(mynum3);