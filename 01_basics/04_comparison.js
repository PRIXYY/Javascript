console.log(2>1);//gives either true or false

console.log("2" > 1);
console.log("02" == 0);//these two will give true as js convert the string for comparisons but that is a problem as we sometimes do not get expected items


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//the reson for the answers are that == and other comparisons work differently 
// Comparisons convert null to a number terating it as zero therefore second and first is false and third is true

console.log("2" === 2); // === is called strict check as it also checks the datatype which the == does not