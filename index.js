
// image1 manipulation

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice"+randomNumber1 +".png"
var randomImageSource = "images/" + randomDiceImage
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource);

//image2 manipulation

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player 1 wins

if (randomNumber1 == randomNumber2){
   document.querySelector("h1").innerHTML = "Oops there has been a draw!"
}

// if player2 wins

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

// Draw

if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} 

