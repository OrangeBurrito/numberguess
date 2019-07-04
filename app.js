const readline = require('readline-sync')

console.clear()

game()

function game() {
    intro()

    let number = randomInt()
    let tries = 1


    while(true) {
    let guess = inputGuess(tries)

    if (guess < number) {
        console.log('too low\n')
        tries++
    } else if (guess > number) {
        console.log('too high\n')
        tries++
    } else {
        console.log('correct')
        break;
    }
}
}

function intro() {
    console.log('********************************')
    console.log('* guess a number between 1-100 *')
    console.log('********************************')
    
}

function randomInt() {
    const number = Math.floor(Math.random() * 100 * 1)
    return number
}

function inputGuess(tries) {
    const inputStr = readline.question(tries + ' guess a number: ')
    return parseInt(inputStr, 10)
}