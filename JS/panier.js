var nombreClics = 0;
var nombreClics1 = 0;

var prixOcan = 1.1;
var prixOcanSport = 1.6;

function majTotaux() {
  var totalOcan = nombreClics * prixOcan;
  var totalOcanSport = nombreClics1 * prixOcanSport;
  var totalHT = totalOcan + totalOcanSport;
  var tva = totalHT * 0.2;
  var douane = totalHT * 0.3;
  var totalTTC = totalHT + tva + douane;

  document.getElementById("totalOcan").textContent = totalOcan.toFixed(2) + "€";
  document.getElementById("totalOcanSport").textContent =
    totalOcanSport.toFixed(2) + "€";
  document.getElementById("totalHT").textContent = totalHT.toFixed(2) + "€";
  document.getElementById("tva").textContent = tva.toFixed(2) + "€";
  document.getElementById("douane").textContent = douane.toFixed(2) + "€";
  document.getElementById("totalTTC").textContent = totalTTC.toFixed(2) + "€";

  // Remplir la modale au passage
  document.getElementById("recapPanier").innerHTML = `
    <p>O'CAN : ${nombreClics} x 1.10€</p>
    <p>O'CAN Sport+ : ${nombreClics1} x 1.60€</p>
    <p>Total HT : ${totalHT.toFixed(2)}€</p>
    <p>TVA (20%) : ${tva.toFixed(2)}€</p>
    <p>Douane (30%) : ${douane.toFixed(2)}€</p>
    <h3>Total TTC : ${totalTTC.toFixed(2)}€</h3>
  `;
}

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent = nombreClics;
  majTotaux();
}

function comptagem() {
  if (nombreClics > 0) {
    nombreClics--;
    document.getElementById("nombreClics").textContent = nombreClics;
    majTotaux();
  }
}

function comptage1() {
  nombreClics1++;
  document.getElementById("nombreClics1").textContent = nombreClics1;
  majTotaux();
}

function comptagem2() {
  if (nombreClics1 > 0) {
    nombreClics1--;
    document.getElementById("nombreClics1").textContent = nombreClics1;
    majTotaux();
  }
}
function Message() {
  var msg = "Vous n'avez cet argent (sale pauvre)";
  alert(msg);
}
// Ajout des événements de comptage
document.getElementById("boutonClic2").addEventListener("click", comptage);
document.getElementById("boutonClic").addEventListener("click", comptagem);
document.getElementById("boutonClic3").addEventListener("click", comptage1);
document.getElementById("boutonClic4").addEventListener("click", comptagem2);
