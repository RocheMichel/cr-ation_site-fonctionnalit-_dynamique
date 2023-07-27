/*Ici ce trouve la partie qui permet l'affiche des images en mozaique et en colonne */
window.addEventListener("DOMContentLoaded", (e) => {
    const icone_mozaique = document.querySelector (".bouton_mozaique"); 
    icone_mozaique.addEventListener('click', afficher_en_mozaique);


    function afficher_en_mozaique () {
        console.log('dfdfdfd');
        const gallerie = document.querySelector(".contenue_photo");
        gallerie.classList.add ('affichage_mozaique');
        gallerie.classList.remove('affichage_colonne');
    }


    const icone_colonne = document.querySelector(".bouton_colonne"); 
    icone_colonne.addEventListener('click', afficher_en_colonne)

    function afficher_en_colonne () {
        console.log('hello');
        const gallerie = document.querySelector(".contenue_photo");
        gallerie.classList.add ('affichage_colonne');
        gallerie.classList.remove('affichage_mozaique');
    }
})