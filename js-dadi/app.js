// generare un numero da 1 a 6 per il giocatore e computer
let player = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;
// stampare i numeri generati
console.log("player has obtained "+ player);
console.log("computer has obtained " + computer);
// confrontare i numeri 
if (player > computer){
    // se il numero del giocatore e maggiore, vince
        console.log("Player wins"); // stampare il risultato
    }else if (computer > player){
    // altrimenti se il numero del computer e maggiore, vince
        console.log("Computer wins"); // stampare il risultato
    }else{
    //  se i numeri sono uguali, pareggio
        console.log("Draw"); // stampare il risultato
    }