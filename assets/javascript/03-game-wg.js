
var wordArray = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eigth"
];
var letters = [];
var guessed = [];
var counter = 0;
var matchIndex;

wordInitialize();

function wordInitialize() {
    letters = [];
    guessed = [];
    counter = 0;
    document.getElementById("game-state").innerHTML = counter;
    var wordPicked = Math.floor(Math.random() * wordArray.length);
    console.log("wordArray[wordPicked] = " + wordArray[wordPicked]);
    document.getElementById("message").innerHTML = "Pick your letter";
    var lettersToGuess = wordArray[wordPicked].split("");
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("<hr></span><span>") + "<hr></span>";
    }

    document.onkeydown = function (event) {
        if (counter < 7) {
            var userGuess = event.key;
            var inGuessedArray = guessed.includes(userGuess);
            var inLettersArray = letters.includes(userGuess);
            // console.log("cancelable? = " + event.cancelable + " " + event.keyCode);
            if (event.keyCode === 116) {
                event.preventDefault();
                document.getElementById("message").innerHTML = "Use the browser's refresh button";
                console.log("F5 pressed");
                return;
            }
            console.log("userGuess = " + userGuess);
            console.log("inGuessedArray = " + inGuessedArray);
            if (inGuessedArray) {
                document.getElementById("message").innerHTML = "That letter was already guessed";
                return;
            }
            guessed.push(userGuess);
            console.log("guessed = " + guessed);
            if (inLettersArray) {
                matchIndex = letters.indexOf(userGuess);
                document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
                document.getElementById("message").innerHTML = "Good guess";
                for (var j = matchIndex + 1; j < letters.length; j++) {
                    matchIndex++;
                    if (userGuess === document.getElementsByTagName("span")[matchIndex].innerHTML.charAt(0)) {
                        document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
                    }
                }
            } else {
                counter++;
                document.getElementById("game-state").innerHTML = counter;
                document.getElementById("message").innerHTML = "That is not a letter in the word";
            }
        }
        if (counter == 7) {
            document.getElementById("message").innerHTML = "Press Space to continue";
            document.onkeydown = function (event) {
                if (event.keyCode != 32) {
                    document.getElementById("message").innerHTML = "Press Space to continue";
                    console.log("event.keyCode#1 =", event.keyCode != 32);
                    return;
                }
                if (event.keyCode === 32) {
                    console.log("hit");
                    console.log("event.keyCode#2 =", event.keyCode != 32);
                    wordInitialize();
                    // return;
                }
            }
        }
    }
};

