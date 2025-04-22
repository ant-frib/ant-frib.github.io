let logo = document.getElementById("notif");

function okclicked() {
  logo.setAttribute("rel", "stylesheet");
  logo.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=production_quantity_limits"
  );

  let iconSpan = document.getElementById("icon");
  iconSpan.className = "material-symbols-outlined"; // Nouvelle classe pour les nouveaux Material Symbols
  iconSpan.innerText = "production_quantity_limits"; // Nouveau nom d’icône
  localStorage.setItem("icon", "production_quantity_limits");
}
let button = document.getElementById("classic");
button.onclick = okclicked;
