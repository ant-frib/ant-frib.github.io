// Texte du slogan à afficher
const sloganText = "Parce que chaque gorgée compte";
let currentLetterIndex = 0;
let cycleCount = 0;
const maxCycles = Infinity;

// Éléments DOM
const sloganElement = document.getElementById("slogan");

function displayLetters() {
    if (currentLetterIndex < sloganText.length) {
        const currentChar = sloganText[currentLetterIndex];
        
        // Créer un span pour la lettre courante
        const letterSpan = document.createElement("span");
        
        // Gérer les espaces différemment
        if (currentChar === " ") {
            letterSpan.className = "space";
            letterSpan.innerHTML = "&nbsp;";
        } else {
            letterSpan.textContent = currentChar;
            letterSpan.className = "letter";
            
            // Animer l'apparition de la lettre
            setTimeout(() => {
                letterSpan.style.opacity = 1;
                letterSpan.style.transition = "opacity 0.3s ease";
            }, 100);
        }
        
        sloganElement.appendChild(letterSpan);
        currentLetterIndex++;
        
        // Délai plus court entre les lettres (100ms)
        setTimeout(displayLetters, 100);
    } else {
        // Toutes les lettres sont affichées, commencer l'animation de translation
        setTimeout(animateTranslation, 1000);
    }
}

function animateTranslation() {
    // Translation vers la droite
    sloganElement.style.transition = "transform 1s ease";
    sloganElement.style.transform = "translateX(100px)";
    
    // Puis vers la gauche
    setTimeout(() => {
        sloganElement.style.transform = "translateX(-100px)";
        
        // Puis retour à la position initiale
        setTimeout(() => {
            sloganElement.style.transform = "translateX(0)";
            
            // Effacer le texte
            setTimeout(() => {
                sloganElement.style.opacity = "0";
                sloganElement.style.transition = "opacity 0.5s ease";
                
                // Réinitialiser et recommencer le cycle
                setTimeout(() => {
                    sloganElement.innerHTML = "";
                    sloganElement.style.opacity = "1";
                    sloganElement.style.transform = "translateX(0)";
                    currentLetterIndex = 0;
                    cycleCount++;
                    
                    if (cycleCount < maxCycles || maxCycles === Infinity) {
                        displayLetters();
                    }
                }, 500);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Démarrer l'animation au chargement de la page
window.onload = displayLetters;