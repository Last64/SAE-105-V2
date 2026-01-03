// Paramètres URL
let urlParams = new URLSearchParams(location.search);
let saeNumber = urlParams.get('number'); //'number' vient de sae.html?number=SAE1.01.

// Vérifier si le numéro de SAE est valide avant de continuer
if (!saeNumber || !SAE[saeNumber]) {
    document.querySelector('body').innerHTML = "<h1>SAE non trouvée.</h1>";
} else {

    // Prendre les infos de l'objet SAE en fonction du nombre
    let saeInfo = SAE[saeNumber];

    //  1. GESTION DES APPRENTISSAGES CRITIQUES (AC) 
    let ac = "";
    // Boucle à travers l'objet AC (ex: AC11.01: "Présenter une organisation...")
    for (let aprc in saeInfo["AC"]) {
        ac += `<div class='AC'>
                  <span>${aprc}</span> | ${saeInfo['AC'][aprc]}
               </div>
               <div class='space'></div>`;
    }
    // Injection dans la page
    document.querySelector("#AC").innerHTML = ac;


    //  2. GESTION DES DONNÉES DU DATA.JS POUR LES INSÉRER DANS LA PAGE SAE.HTML

    // Le numéro de la SAE (qui est la clé dans l'objet)
    document.querySelector(".NumSAE").innerHTML = saeNumber;

    // Le Titre
    document.querySelector(".TitreSAE").innerHTML = saeInfo.titre;

    // La Description 
    document.querySelector(".DescriptionSAE").innerHTML = `<div class="gras">Description:</div> ${saeInfo.description}`;

    // Les Compétences
    document.querySelector(".CompétenceSAE").innerHTML = `<div class="gras">Compétence(s):</div> <span>${saeInfo.compétences.join(', ')}</span>`;

    // Les Ressources
    document.querySelector(".RessourceSAE").innerHTML = `<div class="gras">Ressources:</div> ${Object.values(saeInfo.ressources).join(', ')}`;

    // Le Semestre
    document.querySelector(".SemestreSAE").innerHTML = `<div class="gras">Semestre:</div> ${saeInfo.semestre}`;
    document.querySelector(".PDF").innerHTML = "<a href='../PDF/" + saeNumber + ".pdf'>Voir le PDF</a>"

}
