// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

const userChoice = prompt("pari o dispari?");

let sum;

function randomNum() {

    const random = Math.floor(Math.random()*5) + 1;
    return random;
}

function pariODispari() {

    if (sum % 2 == 0) {

        return "pari";

    } else {

        return "dispari";
    }
}

if (userChoice == "pari" || userChoice == "dispari") {

    const userNum = Number(prompt("Scegli un valore da 1 a 5: "));

    if (!Number.isNaN(userNum) && userNum > 0 && userNum < 6) {

        
        let computerChoice = randomNum();

        sum = userNum + computerChoice;

        const result = pariODispari();
        
        if (result === userChoice) {
            document.querySelector("div").append(`Il computer ha scelto ${computerChoice}, con il totale di ${sum} hai vinto!`);

        } else {
            document.querySelector("div").append(`Il computer ha scelto ${computerChoice}, con il totale di ${sum} hai perso...`);
        }

    } else {

        alert("valore inserito non valido, riprova")
    }

} else {

    alert("valore inserito non valido, riprova")
}