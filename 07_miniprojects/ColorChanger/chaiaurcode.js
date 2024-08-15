// document.getElementById('grey').addEventListener('click', function(e) {
//     console.log(e);
//     document.body.style.backgroundColor = e.target.id; // Correct way to change background color
// });

let a = document.querySelectorAll('.button')
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click',function(e){
        document.body.style.backgroundColor = e.target.id
    });
    
}