// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, 
// farà i suoi calcoli per capire se è palindroma o meno e ci restituirà 
// true o false in base all'esito)

const userWord = prompt("Inserisci una parola, vediamo se è palindroma: ");
console.log(userWord);
let revWord;

function palindromia () {

    for (let i = 0; i < userWord.length; i++) {

        if (userWord[i] === userWord[(userWord.length - 1 - i)]) {

            
            revWord = true;

        } else {

            
            revWord = false;

        }       
    }

    if (revWord == true) {

        document.querySelector("div").append(`La parola ${userWord} è palindroma.`);

    } else {

        document.querySelector("div").append(`La parola ${userWord} non è palindroma.`);
        
    }
}

const stampa = palindromia();