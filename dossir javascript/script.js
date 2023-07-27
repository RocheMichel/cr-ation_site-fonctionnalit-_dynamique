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

/*------------------------------------------------------------------------------------------------------------*/
/*création d'image pour la partie galerie*/
/*------------------------------------------------------------------------------------------------------------*/
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(r=>r.json())
    .then(img =>{
        const contenue_img = document.getElementById(".contenue_img")
      
        for(let i =0; i<img.jokes; i++){
            let titre_img= document.createElement('h2');
            let img_pokemon = document.createElement('img');
            titre_img.textContent = articles.jokes[i].setup;
            img_pokemon.textContent = articles.jokes[i].delivery;
            contener.appendChild(titre_img)
            contener.appendChild(img_pokemon)
        }
    })

    /*------------------------------------------------------------------------------------------------------------*/
/*Mise en place de l'affichage des photos en affichage mozaique ou colonne partie galerie*/
/*------------------------------------------------------------------------------------------------------------*/
