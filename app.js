/// Assurez-vous que le code JavaScript est chargé après le DOM complet
document.addEventListener("DOMContentLoaded", () => {
  const enigmes = [
    {
      title: {
        fr: "La demeure des Tic-Tac",
        en: "The Tic-Tac Residence",
        es: "La morada de los Tic-Tac",
        it: "La dimora dei Tic-Tac"
      },
      correctAnswers: ["8-10-2-20","8 - 10 - 2 - 20"],
      hint: {
        fr: "Les aiguilles de la grande horloge semblent indiquer des directions",
        en: "The hands of the big clock seem to indicate directions",
        es: "Las manecillas del gran reloj parecen indicar direcciones",
        it: "Le lancette del grande orologio sembrano indicare direzioni"
      },
      solution: {
        fr: "Le code secret est 8-10-2-20 (voir p.67)",
        en: "The secret code is 8-10-2-20 (see p.67)",
        es: "El código secreto es 8-10-2-20 (véase p.67)",
        it: "Il codice segreto è 8-10-2-20 (vedi p. 67)"
      },
      hasHint: true
    },
    {
      title: {
        fr: "La Bibliothèque des livres oubliés",
        en: "The Library of Forgotten Books",
        es: "La Biblioteca de los Libros Olvidados",
        it: "La Biblioteca dei Libri Dimenticati"
      },
      correctAnswers: ["23358", "23 358"],
      hint: {
        fr: "Indice pour l'énigme 2.",
        en: "Hint for puzzle 2.",
        es: "Pista para el enigma 2.",
        it: "Indizio per l'enigma 2."
      },
      solution: {
        fr: "23358 (voir p.69)",
        en: "23358 (see p.69)",
        es: "23358 (véase p.69)",
        it: "23358 (vedi p. 69)"
      },
      hasHint: false
    },
    {
      title: {
        fr: "La chambre des codes",
        en: "The Code Chamber",
        es: "La Cámara de los Códigos",
        it: "La Camera dei Codici"
      },
      correctAnswers: "786",
      hint: {
        fr: "Pas d'indice pour cette énigme.",
        en: "No hint for this puzzle.",
        es: "No hay pista para este acertijo.",
        it: "Nessun indizio per questo enigma."
      },
      solution: {
        fr: "786 (voir p.71)",
        en: "786 (see p.71)",
        es: "786 (véase p.71)",
        it: "786 (vedi p. 71)"
      },
      hasHint: false
    },
    {
      title: {
        fr: "L'atelier des alchimistes",
        en: "The Alchemists' Workshop",
        es: "El Taller de los Alquimistas",
        it: "L'Officina degli Alchimisti"
      },
      correctAnswers: {
        fr: "violet",
        en: "purple",
        es: "violeta",
        it: "viola"
      },
      hint: {
        fr: "Les 4 éléments naturels ont leur propre symbole… et peut-être même leur propre couleur.",
        en: "The 4 natural elements have their own symbol... and maybe even their own color.",
        es: "Los 4 elementos naturales tienen su propio símbolo... y tal vez incluso su propio color.",
        it: "I 4 elementi naturali hanno il proprio simbolo... e forse anche il proprio colore."
      },
      solution: {
        fr: "violet (voir p.73)",
        en: "purple (see p.73)",
        es: "violeta (véase p.73)",
        it: "viola (vedi p. 73)"
      },
      hasHint: true
    },
    {
      title: {
        fr: "La serre des merveilles",
        en: "The Greenhouse of Wonders",
        es: "El Invernadero de las Maravillas",
        it: "La Serra delle Meraviglie"
      },
      correctAnswers: ["(8 ; 4)", "(8;4)", "(8; 4)","(8 ;4)", "( 8;4 )", "( 8 ; 4 )","( 8 ;4)","(8; 4)"], 
      hint: {
        fr: "En parlant de « bonnes coordonnées », le petit morceau de tablette gravé semble égaré.",
        en: "Speaking of 'right coordinates', the small piece of engraved tablet seems misplaced.",
        es: "Hablando de 'coordenadas correctas', el pequeño trozo de tableta grabada parece extraviado.",
        it: "Parlando di 'coordinate giuste', il piccolo pezzo di tavoletta incisa sembra smarrito."
      },
      solution: {
        fr: "(8 ; 4) (voir p.75)",
        en: "(8 ; 4) (see p.75)",
        es: "(8 ; 4) (véase p.75)",
        it: "(8 ; 4) (vedi p. 75)"
      },
      hasHint: true
    },
    {
      title: {
        fr: "La salle antique",
        en: "The Ancient Room",
        es: "La Sala Antigua",
        it: "La Sala Antica"
      },
      correctAnswers: ["VENI, VIDI, VICI, ALESIA, LII", "VENI VIDI VICI ALESIA LII"],
      hint: {
        fr: "Pour déchiffrer, utilisez un code de César. Le carré romain est magique.",
        en: "To decipher, use a Caesar cipher. The Roman square is magic.",
        es: "Para descifrar, use un código César. El cuadrado romano es mágico.",
        it: "Per decifrare, usa un cifrario di Cesare. Il quadrato romano è magico."
      },
      solution: {
        fr: "VENI VIDI VICI ALESIA LII (voir p.77)",
        en: "VENI VIDI VICI ALESIA LII (see p.77)",
        es: "VENI VIDI VICI ALESIA LII (véase p.77)",
        it: "VENI VIDI VICI ALESIA LII (vedi p. 77)"
      },
      hasHint: true
    },
    {
      title: {
        fr: "La salle de la symbiose et des lettres cachées",
        en: "Reconstruction of the Secret Word",
        es: "Reconstrucción de la Palabra Secreta",
        it: "Ricostruzione della Parola Segreta"
      },
      correctAnswers: {
        fr: "Partage",
        en: "Share",
        es: "Compartir",
        it: "Condivisione"
      },
      hint: {
        fr: "Indice pour l'énigme 6.",
        en: "Hint for puzzle 6.",
        es: "Pista para el enigma 6.",
        it: "Indizio per l'enigma 6."
      },
      solution: {
        fr: "PARTAGE (voir p.79)",
        en: "SHARE (see p.79)",
        es: "COMPARTIR (véase p.79)",
        it: "CONDIVISIONE (vedi p. 79)"
      },
      hasHint: false
    },
    {
      title: {
        fr: "Le sanctuaire de la libération",
        en: "The Sanctuary of Liberation",
        es: "El Santuario de la Liberación",
        it: "Il Santuario della Liberazione"
      },
      correctAnswers: {
        fr: "FUSION",
        en: "FUSION",
        es: "FUSIÓN",
        it: "FUSIONE"
      },
      hint: {
        fr: "Indice pour l'énigme 7.",
        en: "Hint for puzzle 7.",
        es: "Pista para el enigma 7.",
        it: "Indizio per l'enigma 7."
      },
      solution: {
        fr: "FUSION (voir p.81)",
        en: "FUSION (see p.81)",
        es: "FUSIÓN (véase p.81)",
        it: "FUSIONE (vedi p. 81)"
      },
      hasHint: false
    }
  ];

  const translations = {
    fr: {
      currentLang: "Français &#9662;",
      verifyText: "Vérifiez votre réponse !",
      placeholderResponse: "Réponse",
      validateBtn: "Valider",
      hintBtn: "Indice",
      solutionBtn: "Voir la solution",
      legalMentions: "Mentions légales",
      correctMessage: "Bravo ! Vous avez trouvé la bonne réponse",
      incorrectMessage: "Incorrect. Essayez encore",
      hintPenalty: "Pénalité de 5 minutes !", // Nouveau message
      solutionPenalty: "Pénalité de 10 minutes !" // Nouveau message
      
    },
    en: {
      currentLang: "English &#9662;",
      verifyText: "Check your answer !",
      placeholderResponse: "Answer",
      validateBtn: "Validate",
      hintBtn: "Hint",
      solutionBtn: "See solution",
      legalMentions: "Legal mentions",
      correctMessage: "Congratulations ! You found the correct answer",
      incorrectMessage: "Incorrect. Try again",
      hintPenalty: "5 minute penalty !",
      solutionPenalty: "10 minute penalty !"

      
   
    },
    es: {
      currentLang: "Español &#9662;",
      verifyText: "¡ Verifica tu respuesta !",
      placeholderResponse: "Respuesta",
      validateBtn: "Validar",
      hintBtn: "Pista",
      solutionBtn: "Ver solución",
      legalMentions: "Menciones legales",
      correctMessage: "¡ Bravo ! Has encontrado la respuesta correcta",
      incorrectMessage: "Incorrecto. Intenta de nuevo",
      hintPenalty: "Penalización de 5 minutos !",
      solutionPenalty: "Penalización de 10 minutos !"

    },
    it: {
      currentLang: "Italiano &#9662;",
      verifyText: "Verifica la tua risposta !",
      placeholderResponse: "Risposta",
      validateBtn: "Conferma",
      hintBtn: "Suggerimento",
      solutionBtn: "Vedi soluzione",
      legalMentions: "Menzioni legali",
      correctMessage: "Bravo ! Hai trovato la risposta corretta",
      incorrectMessage: "Errato. Prova di nuovo",
      hintPenalty: "Penalità di 5 minuti !",
      solutionPenalty: "Penalità di 10 minuti !"
    }
  };

  let currentEnigmeIndex = 0;
  let currentLanguage = localStorage.getItem("language") || "fr";

  const enigmeTitle = document.getElementById("enigme-title");
  const responseInput = document.getElementById("response");
  const validateBtn = document.getElementById("validateBtn");
  const hintBtn = document.getElementById("hintBtn");
  const solutionBtn = document.getElementById("solutionBtn");
  const hintText = document.getElementById("hintText");
  const solutionText = document.getElementById("solutionText");
  const messageElement = document.getElementById("message");
  const prevBtn = document.querySelector(".arrow-left");
  const nextBtn = document.querySelector(".arrow-right");
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const transitionSound = new Audio('transition-sound.mp3');
  const hintSolutionSound = new Audio('sounds/transition-sound1.mp3');
  const incorrectSound = new Audio('sounds/transition-sound2.mp3');
  const correctSound = new Audio('sounds/transition-sound3.mp3');
  const languageChangeSound = new Audio('sounds/transition-sound4.mp3');

  let hintUsed = false;

  function playTransitionSound() {
    transitionSound.currentTime = 0; // Réinitialiser l'audio au début
    transitionSound.play();
  }

  function playHintSolutionSound() {
    hintSolutionSound.currentTime = 0;
    hintSolutionSound.play();
  }

  function loadEnigme(index) {
    const enigme = enigmes[index];

    enigmeTitle.textContent = enigme.title[currentLanguage];
    hintText.textContent = enigme.hint[currentLanguage];
    solutionText.textContent = enigme.solution[currentLanguage];

    responseInput.value = "";
    hintText.style.display = "none";
    solutionText.style.display = "none";
    messageElement.style.display = "none";
    hintUsed = false;

    if (enigme.hasHint) {
      hintBtn.style.display = "inline-block";
      solutionBtn.style.display = "none";
      hintBtn.disabled = false;
    } else {
      hintBtn.style.display = "none";
      solutionBtn.style.display = "inline-block";
    }

    updateTextWithTranslations();
  }

  validateBtn.addEventListener("click", () => {
    const userResponse = responseInput.value.trim().toLowerCase();
    const currentEnigme = enigmes[currentEnigmeIndex];

    let isCorrect = false;

    if (Array.isArray(currentEnigme.correctAnswers)) {
      isCorrect = currentEnigme.correctAnswers.some(answer => 
        userResponse === answer.toLowerCase()
      );
    } else if (typeof currentEnigme.correctAnswers === "object") {
      isCorrect = userResponse === currentEnigme.correctAnswers[currentLanguage].toLowerCase();
    } else {
      isCorrect = userResponse === currentEnigme.correctAnswers.toLowerCase();
    }

    if (isCorrect) {
      messageElement.style.display = "block";
      messageElement.style.color = "green";
      messageElement.textContent = translations[currentLanguage].correctMessage;
      correctSound.play();
      animateMessage(messageElement, 'correct');
    } else {
      messageElement.style.display = "block";
      messageElement.style.color = "red";
      messageElement.textContent = translations[currentLanguage].incorrectMessage;
      incorrectSound.play();
      animateMessage(messageElement, 'incorrect');
    }
  });

  function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add('show');
    }, 10);

    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 500);
    }, 3000);
  }

  hintBtn.addEventListener("click", () => {
    if (hintText.style.display === "block") {
      hintText.style.display = "none";
    } else {
      hintText.style.display = "block";
      playHintSolutionSound();
      showPopup(translations[currentLanguage].hintPenalty);
    }
    
    hintUsed = true;
    solutionBtn.style.display = "inline-block";
    hintBtn.disabled = false;
  });
  
  solutionBtn.addEventListener("click", () => {
    if (solutionText.style.display === "block") {
      solutionText.style.display = "none";
    } else {
      solutionText.style.display = "block";
      playHintSolutionSound();
      showPopup(translations[currentLanguage].solutionPenalty);
    }
  });

  function animateMessage(element, type) {
    element.classList.remove('animate-correct', 'animate-incorrect');
    void element.offsetWidth; // Force a reflow
    element.classList.add(`animate-${type}`);
  }
  
  prevBtn.addEventListener("click", () => {
    if (currentEnigmeIndex > 0) {
      currentEnigmeIndex--;
      loadEnigme(currentEnigmeIndex);
      playTransitionSound();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentEnigmeIndex < enigmes.length - 1) {
      currentEnigmeIndex++;
      loadEnigme(currentEnigmeIndex);
      playTransitionSound();
    }
  });
  
  function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    updateTextWithTranslations();
    loadEnigme(currentEnigmeIndex);
    languageChangeSound.play(); // Nouveau son joué ici lors du changement de langue
    languageChangeSound.volume = 1; // Valeur entre 0 et 1, ajustez selon vos préférences
   
  }

  
  
  function updateTextWithTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        if (el.tagName === 'INPUT') {
          el.placeholder = translations[currentLanguage][key];
        } else {
          el.innerHTML = translations[currentLanguage][key];
        }
      }
    });
  
    dropdownBtn.innerHTML = translations[currentLanguage].currentLang;
  }
  
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      changeLanguage(e.target.getAttribute('data-lang'));
    });
  });

  loadEnigme(currentEnigmeIndex);
  updateTextWithTranslations();
});
