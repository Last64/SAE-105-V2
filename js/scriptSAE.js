

console.log(SAE)

for (let [cle, valeur] of Object.entries(SAE)) {
  console.log(cle, valeur)
  document.querySelector('.footersae').innerHTML+= '<a href="sae.html?number='+cle+'"><button class="footerelement">'+cle+'</button></a>'
}