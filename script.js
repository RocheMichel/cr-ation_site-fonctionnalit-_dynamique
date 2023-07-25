/*Ici ce trouve la methode fetch pour permettre à ce que le feed puisse être visible sur le navigateur de la page d'acceuil */
/*cette méthode en Java script permet d'obtenir des textes généré par un serveur qui va les intégrer à mon HTML */
'use strict'

        
fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10')
    .then(r=>r.json())
    .then(articles =>{
        const contener = document.getElementById("contener_article")
        console.log(articles.jokes);
        for(let i =0; i<articles.jokes.length; i++){
            let newsetup= document.createElement('h2');
            let newdelivery = document.createElement('p');
            newsetup.textContent = articles.jokes[i].setup;
            newdelivery.textContent = articles.jokes[i].delivery;
            contener.appendChild(newsetup)
            contener.appendChild(newdelivery)
        }
    })
    
const burger = document.querySelector (".menu_label"); 
    burger.addEventListener('click', () => ouvrire_menu());
    
   const menu = document.querySelector(".menu_deroulant");
function ouvrire_menu () {
    menu.classList.toggle ('show')

}
