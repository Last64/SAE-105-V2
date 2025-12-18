// On récupère la zone d'affichage
const zoneSae = document.querySelector(".sae");
let htmlBoutons = "";

// On boucle sur l'objet SAE (venant de dataSAE.js)
for (let id in SAE) {
    htmlBoutons += `
        <a href="sae.html?number=${id}" style="text-decoration: none;">
            <button class="SAEbouton">
                ${id}
                <div class="titresae">${SAE[id].titre}</div>
            </button>
        </a>`;
}

// On injecte les boutons dans la page
zoneSae.innerHTML = htmlBoutons;