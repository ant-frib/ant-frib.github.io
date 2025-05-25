        // Texte du slogan à afficher
        const sloganText = "Parce que chaque gorgée compte";
        let words = sloganText.split(" ");
        let currentWordIndex = 0;
        let cycleCount = 0;
        const maxCycles = Infinity;

        // Éléments DOM
        const sloganElement = document.getElementById("slogan");

        function displayWords() {
            if (currentWordIndex < words.length) {
                // Créer un span pour le mot courant
                const wordSpan = document.createElement("span");
                wordSpan.textContent = words[currentWordIndex] + " ";
                wordSpan.className = "word";
                sloganElement.appendChild(wordSpan);
                
                // Animer l'apparition du mot
                setTimeout(() => {
                    wordSpan.style.opacity = 1;
                    wordSpan.style.transition = "opacity 0.5s ease";
                }, 100);
                
                currentWordIndex++;
                setTimeout(displayWords, 1000); // 1 seconde entre chaque mot
            } else {
                // Tous les mots sont affichés, commencer l'animation de translation
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
                            currentWordIndex = 0;
                            cycleCount++;
                            
                            if (cycleCount < maxCycles || maxCycles === Infinity) {
                                displayWords();
                            }
                        }, 500);
                    }, 1000);
                }, 1000);
            }, 1000);
        }

        // Démarrer l'animation au chargement de la page
        window.onload = displayWords;