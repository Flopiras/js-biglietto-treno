console.log('JS OK')

// 0 Individuare l'elemento del DOM
const myElement = document.getElementById('price')
console.log(myElement)

// 1 Chiedere all'utente quanti chilometri intende percorrere
const userDistance = parseInt(prompt('Quanti chilometri vuoi percorrere?' , 13))
console.log(userDistance)
console.log(typeof userDistance)

// 2 Chiedere all'utente l'età
const userAge= parseInt(prompt('Quanti anni hai?' , 20))
console.log(userAge)
console.log(typeof userDistance)


// 3 Cacolare il prezzo del biglietto in base ai chilometri
let lastPrice = 0.21 * userDistance
console.log(lastPrice)
console.log(typeof userDistance)


// 4 Applicare sconti SE necessari

if(userAge < 18){
    lastPrice = (lastPrice * 0.8).toFixed(2)
} else if(userAge > 65){
    lastPrice= (lastPrice * 0.6).toFixed(2)
}
console.log(lastPrice)

