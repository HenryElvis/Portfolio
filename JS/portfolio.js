alert("Toujours en cours de création..Veuillez patienter :=)");

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
