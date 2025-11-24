// Affichage des boutons SAE

foot = "";
for (let lien in SAE) {
  foot += '<a href="sae.html?number=' + lien + '"><button style="background-image: url(/images/' 
  + lien + '.jpg);" class="SAEbouton"> <div class="titresae">' + lien + '</div> </button></a>';
}
document.querySelector(".sae").innerHTML = foot