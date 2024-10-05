// Fonction pour démarrer le compte à rebours
window.onload = function() {
  let countdownElement = document.getElementById('countdown');
  let timeLeft = 2 * 60; // 2 minutes en secondes

  let countdownInterval = setInterval(function() {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      // Ajouter un zéro devant les secondes si < 10
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // Mettre à jour l'affichage
      countdownElement.textContent = `Time : ${minutes}:${seconds}`;

      // Vérifier si le temps est écoulé
      if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          countdownElement.textContent = "Temps écoulé !";
      } else {
          timeLeft--;
      }
  }, 1000); // Mettre à jour toutes les secondes
};
