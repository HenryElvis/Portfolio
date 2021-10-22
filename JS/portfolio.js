//alert("Toujours en cours de création..Veuillez patienter :)");

var indexImg = 0;
var imgSrc = "Images/Games Images/Unity/";

let img = document.querySelector("#Img");
let btn = document.querySelector("#Next");

btn.addEventListener('click', () => 
{
    indexImg < 5 ? indexImg++ : indexImg = 0;
    img.src = imgSrc + "The Guardian/Image"+ indexImg +".PNG";
})