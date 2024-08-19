let wheel=document.querySelector('.wheel');
let spinBtn= document.querySelector('.spin-btn');
let value=Math.ceil(Math.random() * 3600);

function spin(){
wheel.style.transform="rotate("+ value +" deg)";
}