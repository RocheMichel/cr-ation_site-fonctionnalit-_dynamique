window.addEventListener("DOMContentLoaded", (e) => {
    /*------------------------------------------------------------------------------------------------------------*/
    /*C'est éléments me permet d'activer ou désactiver le menu déroulant celon si l'utilisateur click sur le menu burger*/
    /*------------------------------------------------------------------------------------------------------------*/

    const burger = document.querySelector (".menu_label"); 
        burger.addEventListener('click', () => ouvrire_menu());


    function ouvrire_menu () {
        const menu = document.querySelector(".menu_deroulant");
        menu.classList.toggle ('show')
    }
})