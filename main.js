/*CONSEGNA
Creare un carosello come nella foto allegata, partendo un array di oggetti letterali.
Ogni oggetto avrà le seguenti proprietà:
 url dell’immagine
titolo
descrizione
MILESTONE #0
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
MILESTONE #1
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
MILESTONE #2
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
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
let current = 0;
let pics = document.getElementById("picsHere")
for (let i = 0; i < images.length; i++) {
    const foto = images[i];
    console.log(images);
    let marvelsImg = `     
       <img class="visible" src="${foto.image}">    
    `;
    if (current<images.length-1) {
       marvelsImg[current].classList.remove("visibile")
        current++
        pics[current].classList.add("visible");   
    }else if (current == images.length -1) {         
        pics[current].classList.remove("visible");       
        current = 0;                         
        pics[current].classList.add("visible"); 
    } 
    pics.innerHTML += marvelsImg
    
}


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
    pics.innerHTML += marvelsImg;*/
    /*for (let k in arrayTeamMembers[i]) {
        console.log(k ,":", arrayTeamMembers[i][k])   
    }*/