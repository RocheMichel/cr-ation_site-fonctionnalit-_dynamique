'use strict'
/*------------------------------------------------------------------------------------------------------------*/
/*Ici ce trouve la methode fetch pour permettre à ce que le feed puisse être visible sur le navigateur de la page d'acceuil */
/*cette méthode en Java script permet d'obtenir des textes généré par un serveur qui va les intégrer à mon HTML */
/*------------------------------------------------------------------------------------------------------------*/
    
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

/*------------------------------------------------------------------------------------------------------------*/
/*C'est éléments me permet d'activer ou désactiver le menu déroulant celon si l'utilisateur click sur le menu burger*/
/*------------------------------------------------------------------------------------------------------------*/

const burger = document.querySelector (".menu_label"); 
    burger.addEventListener('click', () => ouvrire_menu());
const menu = document.querySelector(".menu_deroulant");

function ouvrire_menu () {
    menu.classList.toggle ('show')
 }
/*------------------------------------------------------------------------------------------------------------*/
 /*Cette partie me permet de mettre en place une methode pour ajouter du contenue dans mon file d'actualité*/
/*------------------------------------------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", (e) => {
    const delete1 = document.getElementById("delete1")
        
    delete1.addEventListener('click', () => {
     const element1 = document.querySelector('article');
     element1.removeChild(element1.children[0])
    
    })
    function test(){
        const contener = document.getElementById("contener_article")
        
            let titre_article= document.createElement('h2');
            let contenue_article= document.createElement('p');
            titre_article.textContent = document.getElementById("titre_article").value;
            contenue_article.textContent = document.getElementById("texte_article").value;
            contener.appendChild(titre_article)
            contener.appendChild(contenue_article)
        
    }

    
    const add_article = document.getElementById("add_article")
    add_article.addEventListener('click', test)
})

