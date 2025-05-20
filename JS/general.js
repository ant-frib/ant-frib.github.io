window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  }, 2000);
});

function updateClock() {
  const clockElement = document.getElementById("clock");

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
let startTime = Date.now(); // Temps de début (en millisecondes)
let timerElement = document.getElementById("timer");

function updateTimer() {
  const elapsedTime = Date.now() - startTime; // Temps écoulé depuis le début (en millisecondes)
  const seconds = Math.floor(elapsedTime / 1000); // Convertir en secondes
  timerElement.textContent = `${seconds}s`; // Afficher en secondes
}

// Mise à jour de l'horloge et du chronomètre
updateClock();
setInterval(updateClock, 1000); // Mise à jour de l'horloge chaque seconde
setInterval(updateTimer, 1000); // Mise à jour du chronomètre chaque seconde

function handlePhoneClick(phoneNumber) {
  // Copie dans le presse-papier
  navigator.clipboard.writeText(phoneNumber).then(() => {
    // Affiche le prompt
    const userInput = prompt(
      `Si vous voulez appeler ce numéro: ${phoneNumber}, entrez le de nouveau dans le champ ci-dessous puis validez`
    );

    if (userInput === phoneNumber) {
      console.log(`vous appelez ce numéro: ${phoneNumber}`);

      // Jouer une sonnerie
      const audio = new Audio("../toilet-ananas-nasdas.mp3");
      audio.play();

      // Arrêter après 5 secondes
      setTimeout(() => {
        audio.pause();
      }, 5000);
    }
  });
}
