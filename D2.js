/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [8, 6]

if (numbers[0] > numbers[1]) {
  console.log(numbers[0])
} else {
  console.log(numbers[1])
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 6

if (x !== 5) {

  console.log('not equal')

} 

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 20    
//let y = 21 
if (y % 5 === 0) {

console.log('divisibile per 5')
} else {
  
  console.log('non divisibile per 5')
  
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myeight = [8, 9]     
//const myeight = [10, 2]     
//const myeight = [7, 9]     

if (myeight[0] === 8 || myeight[1] === 8)  {

  console.log('uno dei due è un 8')
} else if ( myeight[0]+myeight[1] === 8 || myeight[0]-myeight[1] === 8 ) {
  console.log('somma o diffferenza uguali a 8')
} else {
  console.log('non è presente il numero 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40
//let totalShoppingCart = 60

if (totalShoppingCart > 50) {

  console.log('totale dovuto:', totalShoppingCart)
} else {
console.log('totale dovuto:', totalShoppingCart+10)

}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const discount = 20

let discountValue = (totalShoppingCart/100)*discount

if (totalShoppingCart > 50) {

  console.log('totale dovuto:', totalShoppingCart-discountValue)
} else {
console.log('totale dovuto:', (totalShoppingCart-discountValue)+10)

}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 5
let b = 4
let c = 15


if (a > b && b > c){

console.log(a, b, c)

} else if (a > c && c > b){

  console.log(a, c, b)
  
  } else if (b > a && a > c){

    console.log(b, a, c)
    
    }
   else if (b > c && a > a){

    console.log(b, c, a)
    
    }

   else if (c > b && b > a){

    console.log(c, b, a)
    
    } else {

      console.log(c, a, b)
    }



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let insertValue = 4
let insertValue = 'patate'




if (typeof insertValue=== 'number'){

  console.log('hai inserito un numero')
}else {
  
  console.log('non hai inserito un numero')

}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let insertnumber = 4
let insertnumber = 7


let u = insertnumber % 2

if (u === 0){

  
console.log('numero pari')

}else {

console.log('numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  let val = 4
  if (val < 10 && val>5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log(" minore di 5");
    } else 
     {console.log("Uguale a 10 o maggiore");
  }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'toronto'

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2]

console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let s = new Array()
s.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(s)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

s[9]=100

console.log(s)


