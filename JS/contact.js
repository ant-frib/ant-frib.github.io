document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitBtn');
  const modal = document.getElementById('ticTacToeModal');
  const cells = document.querySelectorAll('.cell');
  const gameResult = document.getElementById('gameResult');
  const contactForm = document.getElementById('contactForm');
  
  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X'; // Le joueur est X, l'IA est O
  let gameActive = true;
  
  // Patterns gagnants
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
    [0, 4, 8], [2, 4, 6]             // diagonales
  ];
  
  // Ouvrir la modal quand on clique sur Envoyer
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    resetGame();
  });
  
  // Gestion des clics sur les cellules
  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
  
  function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-index'));
    
    // Si la cellule est déjà prise ou le jeu est fini
    if (board[cellIndex] !== '' || !gameActive) return;
    
    // Joueur humain joue
    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    
    // Vérifier si le joueur a gagné
    if (checkWin(currentPlayer)) {
      endGame(false);
      return;
    }
    
    // Vérifier match nul
    if (!board.includes('')) {
      endGame(true);
      return;
    }
    
    // Tour de l'IA
    currentPlayer = 'O';
    setTimeout(aiMove, 500);
  }
  
  function aiMove() {
    if (!gameActive) return;
    
    // Stratégie imbattable pour l'IA
    let bestMove = findBestMove();
    board[bestMove] = 'O';
    document.querySelector(`.cell[data-index="${bestMove}"]`).textContent = 'O';
    
    // Vérifier si l'IA a gagné
    if (checkWin('O')) {
      endGame(false);
      return;
    }
    
    // Vérifier match nul
    if (!board.includes('')) {
      endGame(true);
      return;
    }
    
    currentPlayer = 'X';
  }
  
  function findBestMove() {
    // 1. Vérifier si l'IA peut gagner
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'O';
        if (checkWin('O')) {
          board[i] = '';
          return i;
        }
        board[i] = '';
      }
    }
    
    // 2. Bloquer le joueur s'il peut gagner
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'X';
        if (checkWin('X')) {
          board[i] = '';
          return i;
        }
        board[i] = '';
      }
    }
    
    // 3. Prendre le centre si disponible
    if (board[4] === '') return 4;
    
    // 4. Prendre un coin si disponible
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => board[i] === '');
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
    
    // 5. Prendre n'importe quelle case libre
    const availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }
  
  function checkWin(player) {
    return winningConditions.some(condition => {
      return condition.every(index => {
        return board[index] === player;
      });
    });
  }
  
  function endGame(isDraw) {
    gameActive = false;
    
    if (isDraw) {
      gameResult.textContent = 'Match nul! Le formulaire ne sera pas envoyé.';
      // Le formulaire reste affiché mais n'est pas envoyé
    } else {
      if (currentPlayer === 'O') {
        gameResult.textContent = 'Vous avez perdu! Le formulaire sera réinitialisé.';
        // Réinitialiser le formulaire
        contactForm.reset();
      } else {
        // Normalement impossible d'arriver ici car l'IA est imbattable
        gameResult.textContent = 'Vous avez gagné! Le formulaire sera envoyé.';
        contactForm.submit();
      }
    }
    
    // Fermer la modal après 3 secondes
    setTimeout(() => {
      modal.style.display = 'none';
    }, 3000);
  }
  
  function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameResult.textContent = '';
    
    cells.forEach(cell => {
      cell.textContent = '';
    });
  }
});