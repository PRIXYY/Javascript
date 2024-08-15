

// document.getElementById('cal').addEventListener('click',function(){
//     let h =parseFloat(document.getElementById('height').value)
//     let w =parseFloat(document.getElementById('weight').value)
//     let a = w/(h*h)
//     let results = document.getElementById('results')

//     if (a<18.6) {
//         //alert("You are underweight " + a)
//         results.innerText = ("You are underweight " + a)

//     }
//     else if (a>18.6 && a<24.9) {
//         alert("You are in normal range " +a)
//     } else {
//         alert("You are overweight " + a)
//     }
// })

let a = document.querySelector('form')

a.addEventListener('submit',function(e){
    e.preventDefault();
    let h =parseFloat(document.getElementById('height').value)
    let w =parseFloat(document.getElementById('weight').value)
    let a = w/(h*h)
    let results = document.getElementById('results')
    if (a<18.6) {
             //alert("You are underweight " + a)
             results.innerText = ("You are underweight " + a)
            }
            else if (a>18.6 && a<24.9) {
                alert("You are in normal range " +a)
            } else {
                alert("You are overweight " + a)
            }
     })

