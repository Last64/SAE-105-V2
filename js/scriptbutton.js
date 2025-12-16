// Affichage des boutons SAE

foot = "";
for (let lien in SAE) {
  // L'ajout d'images est ici si vous l'utilisez
  foot += '<a href="sae.html?number=' + lien + '"><button style="background-image: url(/images/' 
  + lien + '.jpg);" class="SAEbouton"> <div class="titresae">' + lien + '</div> </button></a>';
}
// CORRECTION : Cibler la DIV '.sae' dans le header pour les gros boutons stylisés
document.querySelector(".sae").innerHTML = foot