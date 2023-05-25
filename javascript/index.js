"use strict";
var CMD = /** @class */ (function () {
    function CMD(inputId, outputId) {
        this.isCmdHide = true;
        this.commands = {
            help: 'help - affiche cette aide \n contact - affiche mes informations de contact',
            clear: "",
            contact: "contact - affiche mes informations de contact",
            "contact -email": "elvishenry2402@gmail.com",
            "contact -telephone": "07 68 94 94 89",
            "adresse": "Place du marché, 92200 Neuilly-sur-Seine"
        };
        this.inputElement = document.getElementById(inputId);
        this.outputElement = document.getElementById(outputId);
    }
    CMD.prototype.focusInput = function () {
        this.inputElement.focus();
    };
    CMD.prototype.showPrompt = function () {
        this.inputElement.value = "";
        this.focusInput();
    };
    CMD.prototype.runCommand = function (command) {
        if (command in this.commands) {
            if (command == "clear")
                this.clearCommand();
            else
                this.writeOutput(this.commands[command]);
        }
        else
            this.writeOutput("Commande inconnue : ".concat(command, ". Tapez 'help' pour afficher la liste des commandes disponibles."));
    };
    CMD.prototype.clearCommand = function () {
        this.inputElement.value = '';
        this.outputElement.textContent = '';
    };
    CMD.prototype.writeOutput = function (message) {
        var p = document.createElement("p");
        p.innerText = message;
        this.outputElement.appendChild(p);
    };
    return CMD;
}());
var cmd = new CMD("input", "output");
this.addEventListener("keydown", function (e) {
    if (cmd.isCmdHide)
        return;
    if (e.key === "Enter") {
        var command = cmd.inputElement.value;
        cmd.clearCommand();
        cmd.runCommand(command);
        cmd.showPrompt();
    }
});
var cmdContainer = document.getElementById("terminal");
var cmdButton = document.getElementById("cmd-toggle-btn");
cmdButton.addEventListener("click", function () {
    cmdContainer.classList.toggle("hidden");
    cmd.isCmdHide = !cmd.isCmdHide;
    if (cmd.isCmdHide) {
        cmd.inputElement.blur();
    }
    else {
        cmdContainer.scrollIntoView({ behavior: "smooth" });
        cmd.clearCommand();
        cmd.focusInput();
    }
});
cmdContainer.addEventListener("click", function () {
    cmd.focusInput();
});
var titleAnim = document.getElementById("titleAnim");
window.addEventListener("blur", function () {
    titleAnim.style.animationPlayState = "paused";
});
window.addEventListener("focus", function () {
    titleAnim.style.animationPlayState = "running";
});
// ----------------- SCROLL -----------------
var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section1Height = section1.offsetHeight;
// On ajoute un gestionnaire d'événement pour la fenêtre qui se déclenche lorsqu'on scroll
window.addEventListener('scroll', function () {
});
var section = document.getElementById('wrapper');
var threshold = 500; // seuil à partir duquel la section doit s'arrêter de défiler
window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if (scrollY <= threshold) {
        section.style.transform = "translateY(".concat(scrollY, "px)");
    }
});
// stop scrolling until animation is done
