//alert("Toujours en cours de création..Veuillez patienter :)");

var indexGuardian = 0;
var indexFollowLight = 0;
var indexArmy = 0;

var imgSrc = "Images/Games Images/";

let img = document.getElementById("Img");
let imgFollowLight = document.getElementById("ImgFollowLight");
let imgArmy = document.getElementById("ImgArmy");

let btn = document.querySelector("#Next");
let btnNextFollowLight = document.querySelector("#NextFollowLight");
let btnArmy = document.querySelector("#NextArmy");

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

function ChangeImgArmyAtButtonPressed(nameOfFolder, numberFile)
{
    indexArmy < numberFile ? indexArmy++ : indexArmy = 0;
    imgArmy.src = imgSrc + nameOfFolder + indexArmy + ".JPG";
}

btn.addEventListener('click', () => ChangeImgAtButtonPressed("Unity/The Guardian/Image", 5))

btnNextFollowLight.addEventListener('click', 
() => ChangeImgFollowLightAtButtonPressed("Unreal Engine/Follow The Light/Image", 5))

btnArmy.addEventListener('click', () => ChangeImgArmyAtButtonPressed("Unreal Engine/Army/Image", 6))
