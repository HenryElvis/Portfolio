//alert("Toujours en cours de création..Veuillez patienter :)");

var indexGuardian = 0;
var imgSrc = "Images/Games Images/";

let img = document.getElementById("Img");
let imgFollowLight = document.querySelector("#ImgFollowLight");

let btn = document.querySelector("#Next");
let btnNextFollowLight = document.querySelector("#NextFollowLight");

function ChangeImgAtButtonPressed(nameOfFolder, numberFile)
{
    indexGuardian < numberFile ? indexGuardian++ : indexGuardian = 0;
    img.src = imgSrc + nameOfFolder + indexGuardian + ".JPG";
}

function ChangeImgFollowLightAtButtonPressed(nameOfFolder, numberFile)
{
    indexGuardian < numberFile ? indexGuardian++ : indexGuardian = 0;
    imgFollowLight.src = imgSrc + nameOfFolder + indexGuardian + ".JPG";
}

btn.addEventListener('click', () => ChangeImgAtButtonPressed("Unity/The Guardian/Image", 5, img.src))
btnNextFollowLight.addEventListener('click', () => ChangeImgFollowLightAtButtonPressed("Unreal engine/Follow The Light/Image", 5))
