let button = document.getElementById("ouvrir");
let divModale = document.getElementById("modale");
let fermer = document.getElementById("fermer");
let fond = document.getElementById("fond");

button.addEventListener("click", function (){
   divModale.style.display = "flex";

})

fermer.addEventListener("click", function (){
    divModale.style.display = "none";
})