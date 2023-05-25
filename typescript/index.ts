interface CommandsList {
  [key: string]: string;
}

class CMD {

  private cmdCommand = {
    "help": "help - affiche cette aide \n contact - affiche mes informations de contact \n clear - efface l'écran",
    "contact": "contact -email \n contact -phone",
    "contact -email": "elvishenry2402@gmail.com",
    "contact -phone": "07 68 94 94 89",
  }

    public inputElement: HTMLInputElement;
    public isCmdHide = true;
    private outputElement: HTMLDivElement;

    private commands: CommandsList = 
    {
      help: 'help - affiche cette aide \n contact - affiche mes informations de contact',
      clear: "",
      contact: "contact - affiche mes informations de contact",
      "contact -email": "elvishenry2402@gmail.com",
      "contact -telephone": "07 68 94 94 89",
      "adresse": "Place du marché, 92200 Neuilly-sur-Seine",
    };

    constructor(inputId: string, outputId: string) 
    {
      this.inputElement = document.getElementById(inputId) as HTMLInputElement;
      this.outputElement = document.getElementById(outputId) as HTMLDivElement;
    }

    public focusInput()
    {
        this.inputElement.focus();
    }

    public showPrompt() 
    {
      this.inputElement.value = "";
      this.focusInput();
    }
    
    public runCommand(command: string) {

      if (command === "") return;

      if (command in this.cmdCommand) 
      {
        // this.result = "Output:\n" + this.cmdCommand[command];
      }
      else
      {
        this.result = "Output:\n" + `Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`;
        this.writeOutput(this.result);
      }

      switch(command) {
        case "help":
            this.result = "Output:\n" + "Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact";
          this.writeOutput("Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact \n clear - efface l'écran");
          break;
        case "contact":
            this.result = "Output:\n" + "Email :";
          this.writeOutput("Email : elvishenry2402@gmail.com \n Téléphone : 07 68 94 94 89");
          break;
        case "clear":
            this.clearCommand();
            break;
        default:
            this.result = "Output:\n" + `Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`;
          this.writeOutput(`Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`);
      }
      else
        this.writeOutput(`Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`);
    }

    public clearCommand() 
    {
      this.inputElement.value = '';
      this.outputElement.textContent = '';
    }
    
    private writeOutput(message: string) 
    {
      const p = document.createElement("p");
      p.innerText = message;
      this.outputElement.appendChild(p);
    }
  }

const cmd = new CMD("input", "output");
  
this.addEventListener("keydown", (e) => 
{
  if (cmd.isCmdHide) return;

  if (e.key === "Enter") 
  {
    const command = cmd.inputElement.value;
    cmd.clearCommand();
    cmd.runCommand(command);
    cmd.showPrompt();
  }
});

const cmdContainer = document.getElementById("terminal")!;
const cmdButton = document.getElementById("cmd-toggle-btn")!;

cmdButton.addEventListener("click", () => 
{
  cmdContainer.classList.toggle("hidden");
  cmd.isCmdHide = !cmd.isCmdHide;

  if (cmd.isCmdHide)
  {
    cmd.inputElement.blur();
  }
  else
  {
    cmdContainer.scrollIntoView({behavior: "smooth"});
    cmd.clearCommand();
    cmd.focusInput();
  }
});

cmdContainer.addEventListener("click", () => 
{
  cmd.focusInput();
});

const titleAnim = document.getElementById("titleAnim")!;

window.addEventListener("blur", () => 
{
  titleAnim.style.animationPlayState = "paused";
});

window.addEventListener("focus", () => 
{
  titleAnim.style.animationPlayState = "running";
});


// ----------------- SCROLL -----------------

const section1 = document.getElementById('section1')!;
const section2 = document.getElementById('section2')!;
const section1Height = section1.offsetHeight;

// On ajoute un gestionnaire d'événement pour la fenêtre qui se déclenche lorsqu'on scroll
window.addEventListener('scroll', () => 
{
});

const section = document.getElementById('wrapper') as HTMLElement;
const threshold = 500; // seuil à partir duquel la section doit s'arrêter de défiler

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY <= threshold) {
    section.style.transform = `translateY(${scrollY}px)`;
  }
});

// stop scrolling until animation is done
