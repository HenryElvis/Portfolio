//alert("Toujours en cours de création..Veuillez patienter :)");

var imgSrc = "Images/Games Images/";

var indexGuardian = 0;
var indexFollowLight = 0;
var indexArmy = 0;
var indexNin = 0;
var indexBe = 0;
var indexAdv = 0;

let img = document.getElementById("Img");
let imgFollowLight = document.getElementById("ImgFollowLight");
let imgArmy = document.getElementById("ImgArmy");
let imgNin = document.getElementById("ImgNin");
let imgBe = document.getElementById("ImgBe");
let imgAdv = document.getElementById("ImgAdv");

let btn = document.querySelector("#Next");
let btnNextFollowLight = document.querySelector("#NextFollowLight");
let btnArmy = document.querySelector("#NextArmy");
let btnNin = document.querySelector("#NextNinja");
let btnBe = document.querySelector("#NextBe");
let btnAdv = document.querySelector("#NextAdv");

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

function ChangeImgNinAtButtonPressed(nameOfFolder, numberFile)
{
    indexNin < numberFile ? indexNin++ : indexNin = 0;
    imgNin.src = imgSrc + nameOfFolder + indexNin + ".JPG";
}

function ChangeImgBeAtButtonPressed(nameOfFolder, numberFile)
{
    indexBe < numberFile ? indexBe++ : indexBe = 0;
    imgBe.src = imgSrc + nameOfFolder + indexBe + ".JPG";
}

function ChangeImgAdvAtButtonPressed(nameOfFolder, numberFile)
{
    indexAdv < numberFile ? indexAdv++ : indexAdv = 0;
    imgAdv.src = imgSrc + nameOfFolder + indexAdv + ".JPG";
}

btn.addEventListener('click', () => ChangeImgAtButtonPressed("Unity/The Guardian/Image", 5))

btnNextFollowLight.addEventListener('click', 
() => ChangeImgFollowLightAtButtonPressed("Unreal Engine/Follow The Light/Image", 5))

btnArmy.addEventListener('click', () => ChangeImgArmyAtButtonPressed("Unreal Engine/Army/Image", 6))

btnNin.addEventListener('click', () => ChangeImgNinAtButtonPressed("Unreal Engine/Ninja's Adventure/Image", 14))

btnBe.addEventListener('click', () => ChangeImgBeAtButtonPressed("Unreal Engine/Be Stealthy/Image", 9))

btnAdv.addEventListener('click', () => ChangeImgAdvAtButtonPressed("Unreal Engine/Adventurer/Image", 16))