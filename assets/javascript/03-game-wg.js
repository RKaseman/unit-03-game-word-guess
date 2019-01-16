
var wordArray = [
    // "first",
    // "second",
    // "third",
    // "fourth",
    "fifth",
    // "sixth",
    "seventh",
    // "eigth"
];
var letters = [];
var guessed = [];
var counter = 0;
var matchIndex;

var wordPicked = Math.floor(Math.random() * wordArray.length);
// console.log("wordArray[wordPicked] = " + wordArray[wordPicked]);
document.getElementById("game-state").innerHTML = counter;

function wordInitialize() {
    var lettersToGuess = wordArray[wordPicked].split("");
    // console.log("lettersToGuess = " + lettersToGuess);
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("<hr></span><span>") + "<hr></span>";
    }
}

wordInitialize();

console.log("letters = " + letters);

document.onkeyup = function (event) {
    var userGuess = event.key;
    // console.log("userGuess = " + userGuess);
    var inGuessedArray = guessed.includes(userGuess);
    console.log("inGuessedArray = " + inGuessedArray);
    if (inGuessedArray) {
        document.getElementById("message").innerHTML = "That letter was already guessed";
        return;
    }
    var inLettersArray = letters.includes(userGuess);
    guessed.push(userGuess);
    console.log("guessed = " + guessed);
    if (inLettersArray) {
        matchIndex = letters.indexOf(userGuess);
        // console.log("matchIndex = " + matchIndex);
        document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
        document.getElementById("message").innerHTML = "Good guess";
        for (var j = matchIndex + 1; j < letters.length; j++) {
            matchIndex++;
            // console.log("matchIndex = " + matchIndex);
            // console.log("span .innerHTML = " + document.getElementsByTagName("span")[matchIndex].innerHTML);
            if (userGuess === document.getElementsByTagName("span")[matchIndex].innerHTML.charAt(0)) {
                // console.log("span .innerHTML.charAt(0) = " + document.getElementsByTagName("span")[matchIndex].innerHTML.charAt(0));
                document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
            }
        }
    } else {
        counter++;
        document.getElementById("game-state").innerHTML = counter;
        document.getElementById("message").innerHTML = "That is not a letter in the word";
    }
}

