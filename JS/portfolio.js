//alert("Toujours en cours de création..Veuillez patienter :)");

var indexImg = 0;

let img = document.querySelector("#Img");
let btn = document.querySelector("#Next");

btn.addEventListener('click', () => 
{
    img.src = "Images/Games Images/Unity/The Guardian/Image"+ indexImg +".PNG";
    indexImg < 5 ? indexImg++ : indexImg = 0;
})