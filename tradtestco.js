const translations = {
    fr: {
      currentLang: "Français &#9662;",
      pageTitle: "Test de Connexion - Puzzle Key",
      heading: "Test de Connexion",
      countdownText: "Time :",
      question1: "Quel est l'animal préféré de votre partenaire, celui qu'il aimerait avoir comme compagnon de voyage ?",
      question2: "Si votre partenaire devait choisir une arme pour une aventure, laquelle choisirait-il ?",
      question3: "Quel type de paysage votre partenaire préfèrerait explorer : une forêt dense, un désert aride, ou une montagne enneigée ?",
      question4: "Quelle serait la destination idéale de votre partenaire pour une quête épique : une cité perdue, une île mystérieuse ou un château hanté ?",
      question5: "Quel est le trésor que votre partenaire rêverait de découvrir lors d'une aventure ?",
      question6: "Si votre partenaire pouvait posséder un pouvoir magique, lequel serait-ce : invisibilité, téléportation ou contrôle du temps ?",
      question7: "Si votre partenaire devait faire face à un défi ultime, lequel choisirait-il : un labyrinthe géant, une montagne à gravir, ou une rivière à traverser ?",
      question8: "Quel type de créature fantastique votre partenaire aimerait-il affronter : un ogre, un griffon ou un géant ?",
      legalMentions: "Mentions légales",
      footerText: "Puzzle Key © 2024"
    },
    en: {
      currentLang: "English &#9662;",
      pageTitle: "Connection Test - Puzzle Key",
      heading: "Connection Test",
      countdownText: "Time :",
      question1: "What is your partner's favorite animal, the one they would like to have as a travel companion?",
      question2: "If your partner had to choose a weapon for an adventure, which one would they choose?",
      question3: "What type of landscape would your partner prefer to explore: a dense forest, an arid desert, or a snowy mountain?",
      question4: "What would be your partner's ideal destination for an epic quest: a lost city, a mysterious island, or a haunted castle?",
      question5: "What treasure would your partner dream of discovering on an adventure?",
      question6: "If your partner could possess a magical power, which would it be: invisibility, teleportation, or time control?",
      question7: "If your partner had to face the ultimate challenge, which one would they choose: a giant labyrinth, a mountain to climb, or a river to cross?",
      question8: "What type of fantastic creature would your partner like to face: an ogre, a griffin, or a giant?",
      legalMentions: "Legal Mentions",
      footerText: "Puzzle Key © 2024"
    },
    es: {
      currentLang: "Español &#9662;",
      pageTitle: "Prueba de Conexión - Puzzle Key",
      heading: "Prueba de Conexión",
      countdownText: "Time :",
      question1: "¿ Cuál es el animal favorito de su pareja, el que le gustaría tener como compañero de viaje ?",
      question2: "Si su pareja tuviera que elegir un arma para una aventura, ¿ cuál elegiría ?",
      question3: "¿ Qué tipo de paisaje preferiría explorar su pareja: un bosque denso, un desierto árido o una montaña nevada ?",
      question4: "¿ Cuál sería el destino ideal de su pareja para una búsqueda épica: una ciudad perdida, una isla misteriosa o un castillo encantado?",
      question5: "¿ Qué tesoro soñaría su pareja con descubrir en una aventura ?",
      question6: "Si su pareja pudiera poseer un poder mágico, ¿ cuál sería: invisibilidad, teletransportación o control del tiempo ?",
      question7: "Si su pareja tuviera que enfrentarse a un desafío final, ¿ cuál elegiría: un laberinto gigante, una montaña por escalar o un río por cruzar ?",
      question8: "¿ Qué tipo de criatura fantástica le gustaría enfrentar a su pareja: un ogro, un grifo o un gigante ?",
      legalMentions: "Menciones legales",
      footerText: "Puzzle Key © 2024"
    },
    it: {
      currentLang: "Italiano &#9662;",
      pageTitle: "Test di Connessione - Puzzle Key",
      heading: "Test di Connessione",
      countdownText: "Time :",
      question1: "Qual è l'animale preferito del tuo partner, quello che vorrebbe avere come compagno di viaggio ?",
      question2: "Se il tuo partner dovesse scegliere un'arma per un'avventura, quale sceglierebbe ?",
      question3: "Che tipo di paesaggio preferirebbe esplorare il tuo partner: una foresta densa, un deserto arido o una montagna innevata ?",
      question4: "Quale sarebbe la destinazione ideale del tuo partner per una missione epica: una città perduta, un'isola misteriosa o un castello infestato?",
      question5: "Quale tesoro sognerebbe di scoprire il tuo partner durante un'avventura ?",
      question6: "Se il tuo partner potesse possedere un potere magico, quale sarebbe: invisibilità, teletrasporto o controllo del tempo ?",
      question7: "Se il tuo partner dovesse affrontare una sfida finale, quale sceglierebbe: un gigantesco labirinto, una montagna da scalare o un fiume da attraversare ?",
      question8: "Che tipo di creatura fantastica vorrebbe affrontare il tuo partner: un ogro, un grifone o un gigante ?",
      legalMentions: "Note legali",
      footerText: "Puzzle Key © 2024"
    }
  };
  
  let currentLanguage = localStorage.getItem("language") || "fr";
  const languageChangeSound = new Audio('sounds/transition-sound4.mp3');

  
  function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    updateContent();
    updateDropdownButton();
    languageChangeSound.play(); // Nouveau son joué ici lors du changement de langue
    languageChangeSound.volume = 1; // Valeur entre 0 et 1, ajustez selon vos préférences
  }
  
  function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate');
      if (translations[currentLanguage][key]) {
        element.innerHTML = translations[currentLanguage][key];
      }
    });
    document.title = translations[currentLanguage].pageTitle;
  }
  
  function updateDropdownButton() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    dropdownBtn.innerHTML = translations[currentLanguage].currentLang;
  }
  
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = e.target.getAttribute('data-lang');
      changeLanguage(selectedLang);
      document.querySelectorAll('.dropdown-content a').forEach(a => a.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  updateContent();
  updateDropdownButton();
  