// Paramètres URL
let urlParams = new URLSearchParams(location.search);
let saeNumber = urlParams.get('number'); //'number' vient de sae.html?number=SAE1.01.


// Prendre les infos de l'objet SAE en fonction du nombre
let saeInfo = SAE[saeNumber];

// Mettre les infos sur la page

let ac = ""
for (let aprc in SAE[saeNumber]["AC"]) {
    ac += "<div class= 'AC'>" + "<span>" + aprc + "</span>" + " | " + SAE[saeNumber]['AC'][aprc] + "</div>" + "<div class= 'space'>" + "</div>"
}
document.querySelector("#AC").innerHTML = ac


document.querySelector(".NumSAE").innerHTML = (saeInfo.num);
document.querySelector(".TitreSAE").innerHTML = ('<h1>' + saeInfo.titre + '</h1>');
document.querySelector(".CompétenceSAE").innerHTML = ('<p> Compétence(s): ' + "<span>" + saeInfo.compétences.join(', ') + "</span>" + '</p>');
document.querySelector(".DescriptionSAE").innerHTML = ('<p> <div class="gras"> Description: </div> ' + saeInfo.description + '</p>');
document.querySelector(".ACSAE").innerHTML = ('<p> <div class="flex"> <div class="gras"> Apprentissages Critiques:</div> <div> <a class="pdf "href="/pdf/'+[saeNumber]+'.pdf">Voir les détails</a> </div> </div>');
document.querySelector(".RessourceSAE").innerHTML = ('<p>Ressources: ' + Object.values(saeInfo.ressources).join(', ') + '</p>');
document.querySelector(".SemestreSAE").innerHTML = ('<p>Semestre: ' + saeInfo.semestre + '</p>');


// Affichage du footer de la page SAE

foot=""
for(let lien in SAE){
    foot+= '<a href="sae.html?number=' + lien + '"><button class="footerelement">' + lien + '</button></a>'
}
document.querySelector(".footersae").innerHTML=foot + '<a href="index.html"><button class="footerelement">Accueil</button></a>'
