//CHIEDO IL NOME ALL'UTENTE
const firstName = prompt ('Inserisci il tuo nome');

//CHIEDO IL COGNOME ALL'UTENTE
const lastName = prompt ('Inserisci il tuo cognome');

//CHIEDO IL COLORE PPREFITO
const favoriteColor = prompt ('Inserisci il tuo colore preferito');

// NUMERO DELLA CLASSE
const numberClass = (76);

//WELCOME MESSAGE
const welcomeMessage = (`${firstName} ${lastName}, ${favoriteColor}, ${numberClass}`)

//STAMPA SULLA PAGINA
document.querySelector('h1').innerHTML = welcomeMessage;