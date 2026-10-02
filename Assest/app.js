let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

let guessInput = document.getElementById("guessInput");
let message = document.getElementById("message");
let attemptsDisplay = document.getElementById("attempts");


function btnCheckGuessOnActiin() {

    let guess = Number(guessInput.value);

    if (guessInput.value == "") {

        Swal.fire({
            icon: "warning",
            title: "Invalid Input",
            text: "Please enter a number between 1 and 10!",
            imageUrl: "https://media.giphy.com/media/UvtKiyeWYEhRC/giphy.gif",
            imageWidth: 300,
            imageHeight: 300,
        });

    }
    else if (guess < 1 || guess > 10) {

        Swal.fire({
            icon: "error",
            title: "wrong number",
            text: "Please enter a number between 1 and 10!",
            imageUrl: "https://media.giphy.com/media/yDChhXhGE6Ma4/giphy.gif",
            imageWidth: 300,
            imageHeight: 300,
        });

    }
    else {

        attempts++;

        attemptsDisplay.innerHTML = attempts;

        if (guess == randomNumber) {

            Swal.fire({
            icon: "success",
            title: "Correct! You Won the Game! 🎉",
            text: "You guessed the number! "+randomNumber,
            imageUrl: "https://media.giphy.com/media/3oFzmkkwfOGlzZ0gxi/giphy.gif",
            imageWidth: 350,
            imageHeight: 200,
        });

        }
        else if (guess > randomNumber) {

            message.innerHTML = "Too High!";

        }
        else {

            message.innerHTML = "Too Low!";

        }
    }
}


function btnRestartGameOnAction() {

    randomNumber = Math.floor(Math.random() * 10) + 1;

    attempts = 0;

    guessInput.value = "";

    attemptsDisplay.innerHTML = 0;

    message.innerHTML = "Enter your guess to start!";
}