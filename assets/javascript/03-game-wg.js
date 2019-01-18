
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
var messageP = document.getElementById("message");
var visibleCount;

wordInitialize();

function wordInitialize() {
    letters = [];
    guessed = [];
    counter = 0;
    var wordPicked = Math.floor(Math.random() * wordArray.length);
    var lettersToGuess = wordArray[wordPicked].split("");
    document.getElementById("game-state").innerHTML = counter;
    messageP.innerHTML = "Pick your letter";
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("<hr></span><span>") + "<hr></span>";
    }

    document.onkeydown = function (event) {
        if (counter < 7) {
            var userGuess = event.key;
            var inLettersArray = letters.includes(userGuess);
            var inGuessedArray = guessed.includes(userGuess);
            if (event.keyCode === 116) {
                event.preventDefault();
                messageP.innerHTML = "Use the browser's refresh button";
                return;
            }
            if (inGuessedArray) {
                messageP.innerHTML = "That letter was already guessed";
                return;
            }
            guessed.push(userGuess);
            if (inLettersArray) {
                matchIndex = letters.indexOf(userGuess);
                document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
                messageP.innerHTML = "Good guess";
                for (var j = matchIndex + 1; j < letters.length; j++) {
                    matchIndex++;
                    if (userGuess === document.getElementsByTagName("span")[matchIndex].innerHTML.charAt(0)) {
                        document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
                    }
                }
            } else {
                counter++;
                document.getElementById("game-state").innerHTML = counter;
                messageP.innerHTML = "That is not a letter in the word";
            }
        }
        if (counter == 7) {
            messageP.innerHTML = "Press Space to continue";
            document.onkeydown = function (event) {
                if (event.keyCode != 32) {
                    messageP.innerHTML = "Press Space to continue";
                    return;
                }
                if (event.keyCode === 32) {
                    wordInitialize();
                }
            }
        }
        // visibility
        var k;
        for (var k = 0; k < letters.length; k++) {
            console.log("visibility = " + document.getElementsByTagName("span")[k].style.visibility);
            console.log("k = " + k);
        }
    }
};

