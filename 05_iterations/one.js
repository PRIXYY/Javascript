let array = ["flash","superman","batman","manman","woman"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`The superhero is ${element}`);
    
}

//Break and continue

for (let index = 0; index < array.length; index++) {
    if(array[index] == "batman"){       //so essentially when a continue is used the following iteration is skipped in a loop
        continue
    }
    console.log(array[index]);
    
}

for (let index = 0; index < array.length; index++) {
    if(array[index] == "batman"){       //so essentially when a break is used the loop is stopped after that ,we exit the loop there
        break                   
    }
    console.log(array[index]);
    
}

//alt+shift+downarrow for copying ans pasting


//While loop
let i=0;

while(i<array.length){
    console.log(array[i]);
    i++;
}

j=11

do{
    console.log("Hello World");     //it will still print as it does first and then checks

}while(j<=10)