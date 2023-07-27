window.addEventListener("DOMContentLoaded", (e) => {
  

    
    
    const icone_mozaique = document.querySelector (".bouton_ajouter"); 
    icone_mozaique.addEventListener('click', ajouter_image);

    console.log('dfdfdfd');
    function ajouter_image () {
       
        const contener = document.getElementById("image_ajouter")
        contener.src = "https://assets.codepen.io/6093409/sprocket.svg";
        image_ajouter.body.remove(contener)
    }

})