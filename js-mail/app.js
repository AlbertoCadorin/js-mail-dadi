// creare una lista
const list = [
    'taro@gmail.com',
    'asia@gmail.com',
    'ron@gmail.com',
    'lillo@gmail.com',
    'martino@gmail.com',
    'gastone@gmail.com',
    'lucy@gmail.com',
    'jimmi@gmail.com'
]
// chiedere all'utente la sua mail
const emailUsers = prompt('Please enter your email');
// variabile di controllo
let isEmailPresent = false ;
// creare un ciclo che controlli tutte le email della lista e le confronta con l'email che scrive lutente
for (i = 0; i < list.length; i++){
    const currentEmail = list[i];

    if(currentEmail === emailUsers){
        isEmailPresent = true ;
        break; // interrompere il ciclo appena una email 
    }
}
// stampa il risultato
if (isEmailPresent){
    console.log("the email ", emailUsers ," is present, you can enter");
}else{
    console.log("the email ", emailUsers," is not present, it cannot enter");
}

