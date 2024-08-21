function colorchanger(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}


let intervalId;
document.getElementById('start').addEventListener('click',function(){
    if(intervalId == null){
        intervalId = setInterval(colorchanger,2000);
    }
})

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;
})