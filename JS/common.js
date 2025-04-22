window.addEventListener("DOMContentLoaded", () => {
  const savedIcon = localStorage.getItem("icon");
  if (savedIcon) {
    // Charger la nouvelle police
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=" +
      savedIcon;
    document.head.appendChild(link);

    // Appliquer l’icône
    const iconSpan = document.getElementById("icon");
    if (iconSpan) {
      iconSpan.className = "material-symbols-outlined";
      iconSpan.innerText = savedIcon;
    }
  }
});
