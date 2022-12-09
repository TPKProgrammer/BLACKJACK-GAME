let parEl = document.getElementById("par-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startAgainBtn = document.querySelector(".startagain-btn")
let newCardBtn = document.querySelector(".newcard-btn")
let firstNumber = getRandomNumber()
let secondNumber = getRandomNumber()
let results = firstNumber + secondNumber
let isAlive = false
let blackJack = false


function getRandomNumber() {
    let randomNumber = Math.floor( Math.random()*12) + 1

    if (randomNumber === 0) {
        return 11
    } else if (randomNumber >= 11) {
        return 10
    } else {
        return randomNumber
    }
}


function start() {
    cardsEl.textContent += "  " +  firstNumber + " " + " +  " + " " + secondNumber
    sumEl.textContent += " " + results

    if (results === 21) {
        parEl.textContent = "Your got a BLACKJACK!"
        blackJack = true
        newCardBtn.style.display = "block"
    } else if (results <= 20) {
        parEl.textContent = "Do you want a new card?"
        isAlive = true
        newCardBtn.style.display = "block"
    } else {
        parEl.textContent = "Your out of the game!"
        isAlive = false
        startAgainBtn.style.display = "block"
    }
}

function newcard() {

    if (isAlive === true && blackJack === false) {

        let thirdCard = getRandomNumber()
        let allSum = results += thirdCard
    
        cardsEl.textContent += " + " + thirdCard
        sumEl.textContent = "Results: " + allSum
    
        if (results === 21) {
            parEl.textContent = "Your got a BLACKJACK!"
            blackJack = true
        } else if (results <= 20) {
            parEl.textContent = "Do you want a new card?"
            isAlive = true
        } else {
            parEl.textContent = "Your out of the game!"
            isAlive = false
        }
    }


    startAgainBtn.style.display = "block"
    
}

function startagain() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Results: "

    window.location.reload()
    startAgainBtn.style.display = "none"

}