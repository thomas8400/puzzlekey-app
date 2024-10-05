document.addEventListener("DOMContentLoaded", () => {
    const legalTranslations = {
      fr: {
        currentLang: "Français &#9662;",
        title: "Mentions légales",
        section1: "Conformément aux articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (L.C.E.N.), les présentes mentions légales sont portées à la connaissance des utilisateurs du site.",
        section2: "En se connectant et en naviguant sur le site, l'utilisateur accepte pleinement et sans réserve les présentes mentions légales, disponibles dans la section « Mentions légales » du site.",
        editorTitle: "Éditeur",
        section3: "Le présent site, accessible à l'URL https://app.puzzlekey-games.com, est édité par :",
        address: "Adresse : 538 rue du petit loire, 17450 Saint laurent de la prée",
        email: "Email : contact@puzzlekey.com",
        siret: "Numéro SIRET : 90425782100010",
        hostingerTitle: "Hébergement",
        section4: "Le site est hébergé par :",
        hostName: "Hostinger International Ltd.",
        hostAddress: "Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre",
        hostWebsite: "Site web : www.hostinger.fr",
        hostPhone: "Numéro de téléphone : +357 22 030 009",
        PITitle: "Propriété Intellectuelle",
        PITitleContent: "L'ensemble des contenus présents sur notre site est protégé par les lois en vigueur en France.",
        LimitRespTitle: "Limitation de Responsabilité",
        LimitRespContent: "Le Site est disponible 24h/24 et 7j/7, sauf en cas de force majeure.",
        CondTitle: "Conditions d'Utilisation",
        CondContent: "L’accès à notre site est destiné à un usage personnel uniquement.",
        DataTitle: "Données Personnelles",
        DataContent: "Notre site ne traite aucune information personnelle.",
        CookiesTitle: "Cookies",
        CookiesContent: "Notre site n’utilise aucun cookie, ni aucun autre traceur.",
        LawTitle: "Loi applicable et attribution de juridiction",
        LawContent: "Tout litige est soumis au droit français.",
        ContactTitle: "Contact",
        ContactContent: "Pour toute question, vous pouvez nous contacter à : contact@puzzlekey.com",
        updateDate: "(Mise à jour le 10/09/2024)",
    
      },
      en: {
        currentLang: "English &#9662;",
        pageTitle: "Legal Notice - Puzzle Key",
        title: "Legal Notice",
        section1: "In accordance with articles 6-III and 19 of Law No. 2004-575 of June 21, 2004, on Confidence in the Digital Economy, these legal notices are brought to the attention of users.",
        section2: "By connecting to and browsing the site, the user fully and unreservedly accepts these legal notices.",
        editorTitle: "Editor",
        section3: "This site, accessible at https://app.puzzlekey-games.com, is published by:",
        address: "Address: 538 rue du petit loire, 17450 Saint laurent de la prée",
        email: "Email: contact@puzzlekey.com",
        siret: "SIRET Number: 90425782100010",
        hostingerTitle: "Hosting",
        section4: "The site is hosted by:",
        hostName: "Hostinger International Ltd.",
        hostAddress: "Address: 61 Lordou Vironos Street, 6023 Larnaca, Cyprus",
        hostWebsite: "Website: www.hostinger.fr",
        hostPhone: "Phone number: +357 22 030 009",
        PITitle: "Intellectual Property",
        PITitleContent: "All content on our site is protected by applicable French laws.",
        LimitRespTitle: "Limitation of Liability",
        LimitRespContent: "The Site is available 24/7, except in cases of force majeure.",
        CondTitle: "Terms of Use",
        CondContent: "Access to our site is for personal use only.",
        DataTitle: "Personal Data",
        DataContent: "Our site does not process any personal information.",
        CookiesTitle: "Cookies",
        CookiesContent: "Our site does not use any cookies or other tracking technologies.",
        LawTitle: "Applicable Law and Jurisdiction",
        LawContent: "Any dispute is subject to French law.",
        ContactTitle: "Contact",
        ContactContent: "For any questions, you can contact us at: contact@puzzlekey.com",
        updateDate: "(Updated on 10/09/2024)", 

        // Add translations for the remaining sections

      },
      es: {
    currentLang: "Español &#9662;",
    pageTitle: "Aviso Legal - Puzzle Key",
    title: "Aviso Legal",
    section1: "De conformidad con los artículos 6-III y 19 de la Ley n.º 2004-575 del 21 de junio de 2004 para la confianza en la economía digital, se ponen en conocimiento de los usuarios del sitio estas menciones legales.",
    section2: "Al conectarse y navegar por el sitio, el usuario acepta plenamente y sin reservas estas menciones legales.",
    editorTitle: "Editor",
    section3: "Este sitio, accesible en https://app.puzzlekey-games.com, está editado por:",
    address: "Dirección: 538 rue du petit loire, 17450 Saint laurent de la prée",
    email: "Correo electrónico: contact@puzzlekey.com",
    siret: "Número SIRET: 90425782100010",
    hostingerTitle: "Alojamiento",
    section4: "El sitio está alojado por:",
    hostName: "Hostinger International Ltd.",
    hostAddress: "Dirección: 61 Lordou Vironos Street, 6023 Larnaca, Chipre",
    hostWebsite: "Sitio web: www.hostinger.fr",
    hostPhone: "Número de teléfono: +357 22 030 009",
    PITitle: "Propiedad Intelectual",
    PITitleContent: "Todo el contenido presente en nuestro sitio está protegido por las leyes vigentes en Francia.",
    LimitRespTitle: "Limitación de Responsabilidad",
    LimitRespContent: "El sitio está disponible 24/7, salvo en casos de fuerza mayor.",
    CondTitle: "Condiciones de Uso",
    CondContent: "El acceso a nuestro sitio está destinado exclusivamente a un uso personal.",
    DataTitle: "Datos Personales",
    DataContent: "Nuestro sitio no trata ninguna información personal.",
    CookiesTitle: "Cookies",
    CookiesContent: "Nuestro sitio no utiliza cookies ni otros rastreadores.",
    LawTitle: "Legislación Aplicable y Jurisdicción",
    LawContent: "Cualquier disputa se somete a la ley francesa.",
    ContactTitle: "Contacto",
    ContactContent: "Para cualquier pregunta, puede contactarnos en: contact@puzzlekey.com",
    updateDate: "(Actualizado el 10/09/2024)"

        // Add Spanish translations for all sections
      },
      it: {
    currentLang: "Italiano &#9662;",
    pageTitle: "Note Legali - Puzzle Key",
    title: "Note Legali",
    section1: "In conformità agli articoli 6-III e 19 della legge n. 2004-575 del 21 giugno 2004 sulla fiducia nell'economia digitale, queste note legali sono portate all'attenzione degli utenti del sito.",
    section2: "Collegandosi e navigando nel sito, l'utente accetta pienamente e senza riserve le presenti note legali.",
    editorTitle: "Editore",
    section3: "Questo sito, accessibile all'URL https://app.puzzlekey-games.com, è pubblicato da:",
    address: "Indirizzo: 538 rue du petit loire, 17450 Saint laurent de la prée",
    email: "Email: contact@puzzlekey.com",
    siret: "Numero SIRET: 90425782100010",
    hostingerTitle: "Hosting",
    section4: "Il sito è ospitato da:",
    hostName: "Hostinger International Ltd.",
    hostAddress: "Indirizzo: 61 Lordou Vironos Street, 6023 Larnaca, Cipro",
    hostWebsite: "Sito web: www.hostinger.fr",
    hostPhone: "Numero di telefono: +357 22 030 009",
    PITitle: "Proprietà Intellettuale",
    PITitleContent: "Tutti i contenuti presenti sul nostro sito sono protetti dalle leggi vigenti in Francia.",
    LimitRespTitle: "Limitazione di Responsabilità",
    LimitRespContent: "Il sito è disponibile 24 ore su 24, 7 giorni su 7, tranne in caso di forza maggiore.",
    CondTitle: "Condizioni d'Uso",
    CondContent: "L'accesso al nostro sito è destinato esclusivamente a uso personale.",
    DataTitle: "Dati Personali",
    DataContent: "Il nostro sito non tratta alcuna informazione personale.",
    CookiesTitle: "Cookies",
    CookiesContent: "Il nostro sito non utilizza cookie o altri tracciatori.",
    LawTitle: "Legge Applicabile e Giurisdizione",
    LawContent: "Qualsiasi controversia è soggetta alla legge francese.",
    ContactTitle: "Contatto",
    ContactContent: "Per qualsiasi domanda, potete contattarci a: contact@puzzlekey.com",
    updateDate: "(Aggiornato il 10/09/2024)",

        // Add Italian translations for all sections
      }
    };
  
    let currentLanguage = localStorage.getItem("language") || "fr";
  
    function changeLanguage(lang) {
      currentLanguage = lang;
      localStorage.setItem("language", lang);
      updateLegalContent();
      updateDropdownButton();
    }
  
    function updateLegalContent() {
      const legalTextElements = document.querySelectorAll('[data-translate]');
      
      legalTextElements.forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (legalTranslations[currentLanguage][key]) {
          element.innerHTML = legalTranslations[currentLanguage][key];
        }
      });
  
      // Update the page title
      document.title = legalTranslations[currentLanguage].pageTitle;
    }
  
    function updateDropdownButton() {
      const dropdownBtn = document.querySelector('.dropdown-btn');
      dropdownBtn.innerHTML = legalTranslations[currentLanguage].currentLang;
    }
  
    // Add events for language change buttons
    document.querySelectorAll('.dropdown-content a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = e.target.getAttribute('data-lang');
        changeLanguage(selectedLang);
        
        // Update active class
        document.querySelectorAll('.dropdown-content a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  
    // Initialize content in the current language
    updateLegalContent();
    updateDropdownButton();
  });