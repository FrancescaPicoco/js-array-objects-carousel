/* l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

BONUS #1
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS #2
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS #3
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//let sidePics = document.getElementById("sidePics")
let pics = document.getElementById("picsHere")
//const pics = document.querySelectorAll("#picsHere img");
images.forEach((photo) => {
    let marvelsImg = `<img src="${photo.image}">`;
    //let sideMarvelsImg = `<img src="${photo.image}"`;
    let textImg = `<h1>${photo.title}</h1>`;
    pics.innerHTML += marvelsImg;
    pics.innerHTML += textImg;
    //sidePics.innerHTML += sideMarvelsImg;
})

let current = 0;
pics = document.querySelectorAll("#picsHere img");
let titolo = document.querySelectorAll("#picsHere h1");

let imgCorrente = pics[current].classList.add("visible");
let titoloCorrente = titolo[current].classList.add("visible");
console.log(titoloCorrente) //undefined

console.log(imgCorrente) //undefined
document.getElementById("next").addEventListener("click" , function() {
    
    if (current < images.length-1){
       pics[current].classList.remove("visible");
       titolo[current].classList.remove("visible");
       
       current++;

       pics[current].classList.add("visible");
       titolo[current].classList.add("visible");
       
    } else if ( current == images.length -1) {
        pics[current].classList.remove("visible");
        current = 0;
        pics[current].classList.add("visible");   
    }          
})
document.getElementById("previous").addEventListener("click" , function() {
    if ( current == pics.length -1) {
        pics[current].classList.remove("visible");
        current = pics.length -1;
        pics[current].classList.add("visible");
    
        } else if (current > 0){
            pics[current].classList.remove("visible");
            current--;
            pics[current].classList.add("visible");
        }        
})              

/*const arrowfunction = (current , index , images) => {
    for (let i = 0; i < images.length; i++) {
        const element = array[i];
        let fotoVisibility = document.getElementById("idfoto")
        fotoVisibility.classList.add("visible");       
    }

}*/

/*const arrowfunction = (current , index , images) => {
    if (current < images.length-1) {
        pics[current].classList.remove("visible");                                                                                         
        //sidePics[current].classList.add("opacity");
        current++;
        //currentSide++;
        console.log(current)
        pics[current].classList.add("visible");
        //sidePics[current].classList.remove("opacity");
        }else if (current == images.length -1) {         
        pics[current].classList.remove("visible");       
        current = 0;                         
        pics[current].classList.add("visible");      
    }    
//let pics = document.getElementById("picsHere")
/*for (let i = 0; i < images.length; i++) {
    const foto = images[i];
    console.log(images);
    let marvelsImg = `     
       <img class="visible" src="${foto.image}">   
    `;
    if (current<images.length-1) {
       marvelsImg[current].classList.remove("visibile")
        current++
        pics[current].classList.add("visible");   
    } 
    pics.innerHTML += marvelsImg    
}*/


/*pics[current].classList.add("visible");


document.getElementById("next").addEventListener("click" , function() {
    if (current < images.length-1) {
        pics[current].classList.remove("visible");
        //sidePics[current].classList.add("opacity");
        current++;
        //currentSide++;
        console.log(current)
        pics[current].classList.add("visible");
        //sidePics[current].classList.remove("opacity");
        }else if (current == images.length -1) {         
        pics[current].classList.remove("visible");       
        current = 0;                         
        pics[current].classList.add("visible");      
    }    
})*/
/*if (current<images.length-1) {
        pics[current].classList.remove("visible");
        current++
        //pics[current].classList.add("visible");   
    }else if (current == images.length -1) {         
        pics[current].classList.remove("visible");       
        current = 0;                         
        pics[current].classList.add("visible"); 
    } 
    pics.innerHTML += marvelsImg;
    for (let k in arrayTeamMembers[i]) {
        console.log(k ,":", arrayTeamMembers[i][k])   
    }*/