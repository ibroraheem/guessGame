function guessGame() {
    let randNumber = Math.random() * 11;
    let randomNumber = Math.floor(randNumber);
    let guess;

    do {
        guess = prompt("Guess the Number");
        console.log(guess, randomNumber);
        if (randomNumber > guess) {
            console.log("You guessed too low")
        } else if (randomNumber < guess) {
            console.log("You guessed too high")
        }
    } while (guess != randomNumber);
    console.log("You won");

}

guessGame();