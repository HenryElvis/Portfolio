//alert("Toujours en cours de création..Veuillez patienter :)");

var imgSrc = "Images/Games Images/";

var indexHydro = 0;
var indexFlappy = 0;
var indexTDR = 0;
var indexTD = 0;
var indexSI = 0;

var indexGuardian = 0;
var indexFollowLight = 0;
var indexArmy = 0;
var indexNin = 0;
var indexBe = 0;
var indexAdv = 0;

let img = document.getElementById("ImgGuard");
let imgFollowLight = document.getElementById("ImgFollowLight");
let imgArmy = document.getElementById("ImgArmy");
let imgNin = document.getElementById("ImgNin");
let imgBe = document.getElementById("ImgBe");
let imgAdv = document.getElementById("ImgAdv");

let imgHydro = document.getElementById("ImgHydro");
let imgFlappy = document.getElementById("ImgFlappy");
let imgTDR = document.getElementById("ImgTDR");
let imgTD = document.getElementById("ImgTD");
let imgSI = document.getElementById("ImgSI");

let btn = document.querySelector("#Next");
let btnNextFollowLight = document.querySelector("#NextFollowLight");
let btnArmy = document.querySelector("#NextArmy");
let btnNin = document.querySelector("#NextNinja");
let btnBe = document.querySelector("#NextBe");
let btnAdv = document.querySelector("#NextAdv");

let btnHydro = document.querySelector("#NextHydro");
let btnFlappy = document.querySelector("#NextFlappy");
let btnTDR = document.querySelector("#NextTDR");
let btnTD = document.querySelector("#NextTD");
let btnSI = document.querySelector("#NextSI");

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

function ChangeImgSIAtButtonPressed(nameOfFolder, numberFile)
{
    indexSI < numberFile ? indexSI++ : indexSI = 0;
    imgSI.src = imgSrc + nameOfFolder + indexSI + ".JPG";
}

function ChangeImgFlappyAtButtonPressed(nameOfFolder, numberFile)
{
    indexFlappy < numberFile ? indexFlappy++ : indexFlappy = 0;
    imgFlappy.src = imgSrc + nameOfFolder + indexFlappy + ".JPG";
}

function ChangeImgTDAtButtonPressed(nameOfFolder, numberFile)
{
    indexTD < numberFile ? indexTD++ : indexTD = 0;
    imgTD.src = imgSrc + nameOfFolder + indexTD + ".JPG";
}

function ChangeImgHydroAtButtonPressed(nameOfFolder, numberFile)
{
    indexHydro < numberFile ? indexHydro++ : indexHydro = 0;
    imgHydro.src = imgSrc + nameOfFolder + indexHydro + ".JPG";
}

function ChangeImgTDRAtButtonPressed(nameOfFolder, numberFile)
{
    indexTDR < numberFile ? indexTDR++ : indexTDR = 0;
    imgTDR.src = imgSrc + nameOfFolder + indexTDR + ".JPG";
}

btn.addEventListener('click', () => ChangeImgAtButtonPressed("Unity/The Guardian/Image", 5))

btnNextFollowLight.addEventListener('click', 
() => ChangeImgFollowLightAtButtonPressed("Unreal Engine/Follow The Light/Image", 5))

btnArmy.addEventListener('click', () => ChangeImgArmyAtButtonPressed("Unreal Engine/Army/Image", 6))

btnNin.addEventListener('click', () => ChangeImgNinAtButtonPressed("Unreal Engine/Ninja's Adventure/Image", 14))

btnBe.addEventListener('click', () => ChangeImgBeAtButtonPressed("Unreal Engine/Be Stealthy/Image", 9))

btnAdv.addEventListener('click', () => ChangeImgAdvAtButtonPressed("Unreal Engine/Adventurer/Image", 16))

btnSI.addEventListener('click', () => ChangeImgSIAtButtonPressed("Unity/SpermInvaders/Image", 8))
btnHydro.addEventListener('click', () => ChangeImgHydroAtButtonPressed("Unity/Hydromorphe/Image", 16))
btnFlappy.addEventListener('click', () => ChangeImgFlappyAtButtonPressed("Unity/Flappy Bird/Image", 6))
btnTD.addEventListener('click', () => ChangeImgTDAtButtonPressed("Unity/Tower Defense/Image", 6))
btnTDR.addEventListener('click', () => ChangeImgTDRAtButtonPressed("Unity/TopDown Reseau/Image", 10))


let btnChangeBackground = document.querySelector("input");

var isLightMode = false;

btnChangeBackground.addEventListener('click', () => ChangeBackgroundColor());

var elementShouldWhiteColor = document.getElementsByClassName('whiteColor');
var mode = document.getElementById('mode');

function ChangeBackgroundColor()
{
    if (isLightMode)
    {
        document.body.style.backgroundColor = "Black";
        isLightMode = !isLightMode;

        mode.src = "Images/Icons Images/sun.png"

        for(var i = 0; i < elementShouldWhiteColor.length; i++) 
        {
            elementShouldWhiteColor[i].style.color = "White";
        }
    }
    else
    {
        document.body.style.backgroundColor = "White";
        isLightMode = !isLightMode;

        mode.src = "Images/Icons Images/moon.png"

        for(var i = 0; i < elementShouldWhiteColor.length; i++) {
            elementShouldWhiteColor[i].style.color = "Black";
         }
    }
}

history.scrollRestoration = 'manual';

history.scrollRestoration ? history.scrollRestoration = 'manual': 
                            window.onbeforeunload = () => 
                                {window.scrollTo(0, 0);};
