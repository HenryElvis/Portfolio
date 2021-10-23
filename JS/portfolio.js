//alert("Toujours en cours de création..Veuillez patienter :)");

var indexGuardian = 0;
var indexFollowLight = 0;

var imgSrc = "Images/Games Images/";

let img = document.getElementById("Img");
let imgFollowLight = document.getElementById("ImgFollowLight");

let btn = document.querySelector("#Next");
let btnNextFollowLight = document.querySelector("#NextFollowLight");

function ChangeImgAtButtonPressed(nameOfFolder, numberFile)
{
    indexGuardian < numberFile ? indexGuardian++ : indexGuardian = 0;
    img.src = imgSrc + nameOfFolder + indexGuardian + ".JPG";
}

function ChangeImgFollowLightAtButtonPressed(nameOfFolder, numberFile)
{
    indexFollowLight < numberFile ? indexFollowLight++ : indexFollowLight = 0;
    imgFollowLight.src = imgSrc + nameOfFolder + indexFollowLight + ".JPG";
}

btn.addEventListener('click', () => ChangeImgAtButtonPressed("Unity/The Guardian/Image", 5))

btnNextFollowLight.addEventListener('click', () => ChangeImgFollowLightAtButtonPressed("Unity/The Guardian/Image", 5))
