document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const input = document.getElementById("commandInput");
  const terminal = document.getElementById("terminal");

  let seriousMode = false;
  let truthLevel = 0;
  let generatedCount = 0;
  const symbols = [
    "△",
    "𓅓",
    "𓂀",
    "𓁿",
    "𓅇",
    ".˚⊹. ࣪𓉸 ࣪⊹˚.",
    "𓄀",
    "⌖",
    "⋆˚࿔",
    ".ᐟ",
    "₊ ⊹",
    "⋆౨ৎ˚⟡˖ ࣪",
    "☼"
  ];

  /* ------------------ silly databasee------------------ */

  const subjects = ["Quantum Physics","Owls","Bananas","Wi-Fi routers","Dreams","TikTok dances","Toasters","Clouds","Cats","Area 51 vending machines","AI","birds"];
  const verbs = ["are secretly","were invented to","are controlled by","exist only because of","are hypnotizing humans with","are secretly controlling","exist only to","are a distraction from","channel energy into","are secretly powered by","were planted by","are monitored through","vibrate in sync with","were designed to brainwash","cover up the existence of"];
  const objects = ["lizard people","5G towers","the Illuminati","AI overlords","shadow governments","Molloch","alien motherships","big soda","underground mole people","alien WiFi signals","reptilian overlords","flat-earthers","a hidden 25th hour of the day","sentient cheese","time travelers","quantum ducks","ancient TikTok dances","forbidden Doritos flavors","the ghost of Nikola Tesla","dream-harvesting corporations"];

  /* ------------------ serious database ------------------ */

  const seriousSubjects = [
    "Time zones","Elections","Language itself","The calendar",
    "The stock market","GPS satellites","History textbooks",
    "Facial recognition","School curriculums","Weather forecasts",
    "Architectural grids","Digital timestamps","Search engine rankings",
    "Behavioral analytics","Terms and conditions agreements",
    "Census databases","Algorithmic recommendations"
  ];

  const seriousVerbs = [
    "were engineered to","exist mainly to","were rewritten to",
    "are manipulated to","secretly regulate",
    "quietly restructure","gradually normalize",
    "statistically reinforce","predict and pre-empt",
    "reshape perception toward","subconsciously anchor belief in",
    "convert curiosity into"
  ];

  const seriousObjects = [
    "make populations easier to govern",
    "prevent collective memory from forming",
    "condition humans for compliance",
    "hide mass data experiments",
    "standardize thought patterns",
    "blur the boundary of truth and fiction",
    "predictable consumption habits",
    "pre-approved identity structures",
    "controlled narrative baselines",
    "filtered cognitive bandwidth",
    "manageable emotional cycles"
  ];

  const existentialClosers = [
    "This was agreed upon.",
    "The system remained stable.",
    "You adapted.",
    "No one noticed.",
    "The pattern held."
  ];

  /* util */

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /* GENERATOR  */

  function generateConspiracy() {
    truthLevel++;

    let subject, verb, object;

    if (seriousMode) {
      subject = getRandom(seriousSubjects);
      verb = getRandom(seriousVerbs);
      object = getRandom(seriousObjects);
    }
    else if (truthLevel < 5) {
      subject = getRandom(subjects);
      verb = getRandom(verbs);
      object = getRandom(objects);
    }
    else if (truthLevel < 10) {
      subject = Math.random() < 0.5 ? getRandom(subjects) : getRandom(seriousSubjects);
      verb = Math.random() < 0.5 ? getRandom(verbs) : getRandom(seriousVerbs);
      object = Math.random() < 0.5 ? getRandom(objects) : getRandom(seriousObjects);
    }
    else {
      subject = getRandom(seriousSubjects);
      verb = getRandom(seriousVerbs);
      object = getRandom(seriousObjects);
    }

    updateUI();

    if (truthLevel > 20) {
      return `${subject} ${verb} ${object}. ${getRandom(existentialClosers)}`;
    }

    return truthLevel > 12
      ? `${subject} ${verb} ${object}.`
      : `${subject} ${verb} ${object}`;
  }


  function updateUI() {


    if (truthLevel > 7 && terminal) {
      terminal.style.borderColor = "#9f88ff";
      terminal.style.boxShadow = "0 0 18px #8888ff";
    }

 
    if (truthLevel > 12) {
      document.body.style.filter = "saturate(0.9)";
      if (terminal) terminal.style.color = "#d8d0ff";
    }

    if (truthLevel > 18 && terminal) {
      terminal.style.letterSpacing = "0.5px";

      if (Math.random() < 0.15) {
        setTimeout(() => {
          printLine("[signal stability fluctuating...]");
        }, 600);
      }
    }
  }


  function printLine(text) {
    if (!output) return;
    const line = document.createElement("div");
    line.className = "line";
    line.innerText = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function printGenerated(text) {
    if (!output) return;
    const includeSymbol = seriousMode ? (((generatedCount + 1) % 4) === 0) : (Math.random() < 0.7);
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const lineText = includeSymbol ? `${text} ${symbol}` : text;
    const line = document.createElement("div");
    line.className = "line";
    line.innerText = lineText;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    generatedCount++;
  }


  function handleCommand(cmd) {
    if (!cmd) return;

    printLine("> " + cmd);

    switch (cmd.toLowerCase()) {

      case "help":
        printLine("Commands: generate, truth.exe, reveal, clear, .serious//, help");
        break;

      case "generate":
        printGenerated(generateConspiracy());
        break;

      case "clear":
        if (output) output.innerHTML = "";
        break;

      case "truth.exe":
        truthLevel += 2;
        printLine("Accessing hidden nodes...");
        setTimeout(() => {
          printGenerated(generateConspiracy());
        }, 1000);
        break;

      case "reveal":
        truthLevel += 3;
        const generatedReveal = generateConspiracy();
        const revelations = [
          "The sky is a projection.",
          "Patterns repeat for a reason.",
          "The agreement predates you.",
          generatedReveal
        ];
        revelations.forEach((t, i) => {
          setTimeout(() => {
            if (i === 3) printGenerated(t); else printLine(t);
          }, i * 900);
        });
        break;

      case ".serious//":
        seriousMode = !seriousMode;
        printLine("Serious mode: " + (seriousMode ? "ON" : "OFF"));
        break;

      default:
        printLine("Unknown command.");
    }
  }


  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handleCommand(input.value.trim());
        input.value = "";
      }
    });
  }

  document.addEventListener("click", () => {
    if (input) input.focus();
  });

});
