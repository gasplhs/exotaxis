"use strict"

let radio=["Anissa de Wejdene", "Vivienne Westwood de Snorunt", "PAIN de Ajna", "Tellement d'Idrane","Inaudible de Luther"] // on commence par créer un tableau des 5 musiques disponible à la radio

let feuxrouges = 30 // nombre de feux rouge restant
let nbtaxis = 0 // nombre de changement de taxi 
let santeMentale = 10 // point de vie de John
console.log("Salut c'est John je veux rentrer chez moi en taxi sauf que j'ai horreur de la chanson 'Anissa' de Wejdene et beaucoup de chauffeurs l'écoutent à la radio ! Si je l'entend, je quitte le taxi...");

for(let i=0;i<30;i++){ // créer un boucle qui tourne 30 fois (par rapport au nombre de feux rouges)
    let choixMusique = radio[Math.floor(Math.random()*5)] //choixMusique est une musique tirée aléatoirement dans le tableau radio
    if (choixMusique==radio[0]){ // vérifie si la musique actuellement dans le taxi est Anissa de Wejdene
        santeMentale-- // variable santeMentale - 1
        nbtaxis++ // variable nbtaxis + 1
        console.log("Je vais tout casser la musique à la radio est "+choixMusique+", il reste "+feuxrouges+" feux rouges avant d'arriver chez moi, ma santé mentale est à "+santeMentale)
        if(santeMentale==0){ // si les points de vie de John tombent à 0, écrit "BOOM c'est ciao !"
            console.log("BOOM c'est ciao !")
            break // permet de stopper le code ici pour que le nombre de feux rouges arrête de diminuer et écrire dans la console la phrase de fin
        }
    }
    feuxrouges-- // diminue le nombre de feux rouges restants à chaque tour de boucle
    if(feuxrouges!=0 && choixMusique!=radio[0]){
        console.log("Super la musique à la radio est "+choixMusique+", il reste "+feuxrouges+" feux rouges avant d'arriver chez moi !");
    }else if(nbtaxis >= 5 && feuxrouges==0){ // s'il a eu besoin de prendre 5 taxis ou plus, écrit que ça coûte cher !
        console.log("John est arrivé en "+nbtaxis+" taxis différents ! Sa santé mentale est à "+santeMentale+ ".Ne pas aimer une musique à la mode, ça coûte cher au quotidien...")
    }else if(nbtaxis < 5 && feuxrouges==0){// s'il n'a pas eu à prendre 5 taxis différent, simplemen écrire le nombre de taxi(s) et les points de vie restants
        console.log("John est arrivé en "+nbtaxis+" taxis différents ! Sa santé mentale est à "+santeMentale)
    }
}
