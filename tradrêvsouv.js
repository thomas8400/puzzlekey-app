const translations = {
    fr: {
      currentLang: "Français &#9662;",
      pageTitle: "RÊVES ET SOUVENIRS",
      countdownText: "Time : 2:00",
      question1: "Fragments de souvenirs :",
      action1: "<em>Action à réaliser :</em> Chacun de vous doit écrire trois souvenirs marquants de votre relation.",
      question2: "Moments Présents :",
      action2: "<em>Action à réaliser :</em> Chacun de vous doit écrire trois moments récents que vous avez vécus ensemble.",
      question3: "Rêves d'Avenir :",
      action3: "<em>Action à réaliser :</em> Chacun de vous doit écrire trois rêves ou objectifs futurs que vous souhaitez réaliser ensemble.",
      question4: "Moments de Détente :",
      action4: "<em>Action à réaliser :</em> Chacun de vous doit écrire trois façons dont vous aimez passer du temps ensemble pour vous détendre.",
      question5: "Lieux mémorables :",
      action5: "<em>Action à réaliser :</em> Chacun de vous doit écrire trois lieux spéciaux où vous avez créé des souvenirs ensemble.",
      legalMentions: "Mentions légales",
      footerText: "Puzzle Key © 2024"
    },
    en: {
      currentLang: "English &#9662;",
      pageTitle: "DREAMS AND MEMORIES",
      countdownText: "Time : 2:00",
      question1: "Fragments of memories :",
      action1: "<em>Action to perform:</em> Each of you must write three significant memories of your relationship.",
      question2: "Present Moments :",
      action2: "<em>Action to perform:</em> Each of you must write three recent moments you've shared together.",
      question3: "Dreams of the Future :",
      action3: "<em>Action to perform :</em> Each of you must write three future dreams or goals you want to achieve together.",
      question4: "Relaxing Moments :",
      action4: "<em>Action to perform :</em> Each of you must write three ways you enjoy spending time together to relax.",
      question5: "Memorable Places :",
      action5: "<em>Action to perform :</em> Each of you must write three special places where you've created memories together.",
      legalMentions: "Legal mentions",
      footerText: "Puzzle Key © 2024"
    },
    es: {
      currentLang: "Español &#9662;",
      pageTitle: "SUEÑOS Y RECUERDOS",
      countdownText: "Time : 2:00",
      question1: "Fragmentos de recuerdos :",
      action1: "<em>Acción a realizar :</em> Cada uno debe escribir tres recuerdos que destaquen en su relación",
      question2: "Momentos presentes :",
      action2: "<em>Acción a realizar :</em> Cada uno de vosotros debe escribir tres momentos recientes que hayáis vivido juntos",
      question3: "Sueños del futuro :",
      action3: "<em>Acción a realizar:</em> Cada uno de vosotros debe escribir tres sueños o metas futuras que queráis alcanzar juntos",
      question4: "Momentos de relajación :",
      action4: "<em>Acción a realizar:</em> Cada uno de vosotros debe escribir tres formas en las que os gusta pasar tiempo juntos para relajaros, etc.. ",
      question5: "Lugares memorables :",
      action5: "<em>Acción a realizar:</em> Cada uno de vosotros debe escribir tres lugares especiales en los que hayáis creado recuerdos juntos",
      legalMentions: "Menciones legales",
      footerText: "Puzzle Key © 2024"
    },
    it: {
      currentLang: "Italiano &#9662;",
      pageTitle: "SOGNI E RICORDI",
      countdownText: "Time : 2:00",
      question1: "Frammenti di ricordi :",
      action1: "<em>Azione da svolgere:</em> Ognuno di voi deve scrivere tre ricordi che spiccano nella vostra relazione",
      question2: "Momenti presenti :",
      action2: "<em>Azione da svolgere:</em> Ognuno di voi deve scrivere tre momenti recenti che avete vissuto insieme",
      question3: "Sogni per il futuro :",
      action3: "<em>Azione da svolgere:</em> Ognuno di voi deve scrivere tre sogni o obiettivi futuri che volete raggiungere insieme",
      question4: "Momenti di relax :",
      action4: "<em>Azione da svolgere:</em> Ognuno di voi deve scrivere tre modi in cui vi piace passare del tempo insieme per rilassarvi",
      question5: "Luoghi memorabili :",
      action5: "<em>Azione da svolgere:</em> Ognuno di voi dovrebbe scrivere tre luoghi speciali in cui avete creato dei ricordi insieme",
      legalMentions: "Note legali",
      footerText: "Puzzle Key © 2024"
    }
  };
  
  // Récupération de la langue actuelle depuis le stockage local, par défaut le français
  let currentLanguage = localStorage.getItem("language") || "fr";
  const languageChangeSound = new Audio('sounds/transition-sound4.mp3');
  
  // Fonction pour changer la langue
  function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang); // Sauvegarder la langue choisie dans le stockage local
    updateContent(); // Met à jour tout le contenu avec la langue choisie
    updateDropdownButton(); // Met à jour le bouton du menu déroulant
    languageChangeSound.play(); // Nouveau son joué ici lors du changement de langue
    languageChangeSound.volume = 1; // Valeur entre 0 et 1, ajustez selon vos préférences
  }
  
  // Fonction pour mettre à jour le contenu de la page en fonction de la langue sélectionnée
  function updateContent() {
    const elements = document.querySelectorAll('[data-translate]'); // Sélectionne tous les éléments avec l'attribut data-translate
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate'); // Récupère la clé de traduction de l'élément
      if (translations[currentLanguage][key]) { // Si une traduction existe pour la clé dans la langue choisie
        element.innerHTML = translations[currentLanguage][key]; // Met à jour le contenu de l'élément
      }
    });
  
    // Mettre à jour le titre de la page
    document.title = translations[currentLanguage].pageTitle;
  }
  
  // Fonction pour mettre à jour le texte du bouton de sélection de la langue
  function updateDropdownButton() {
    const dropdownBtn = document.querySelector('.dropdown-btn'); // Sélectionne le bouton du menu déroulant
    dropdownBtn.innerHTML = translations[currentLanguage].currentLang; // Met à jour le texte du bouton avec la langue actuelle
  }
  
  // Ajout des événements de clic sur les options du menu déroulant pour changer la langue
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Empêche l'action par défaut du lien
      const selectedLang = e.target.getAttribute('data-lang'); // Récupère la langue sélectionnée
      changeLanguage(selectedLang); // Change la langue
      // Met à jour la classe active pour indiquer la langue actuelle
      document.querySelectorAll('.dropdown-content a').forEach(a => a.classList.remove('active')); // Supprime la classe active de toutes les options
      e.target.classList.add('active'); // Ajoute la classe active à l'option sélectionnée
    });
  });
  
  // Initialiser le contenu et le bouton lors du chargement de la page
  updateContent();
  updateDropdownButton();
  