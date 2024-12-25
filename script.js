const restartButton = document.getElementById("restart");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const purpleButton = document.getElementById("purple");


restartButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'white';
});

redButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'blue';
});

greenButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'green';
});

purpleButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'purple';
});

