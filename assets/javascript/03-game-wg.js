
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

var matchIndex;
var messageSays = document.getElementById("message");

gameInitialize();

function gameInitialize() {
    letters = [];
    guessed = [];
    counter = 0;
    var wordPicked = Math.floor(Math.random() * wordArray.length);
    var lettersToGuess = wordArray[wordPicked].split("");
    document.getElementById("game-state").innerHTML = counter;
    messageSays.innerHTML = "pick your letter";
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("<hr></span><span>") + "<hr></span>";
    };

    document.onkeydown = function (event) {
        if (counter < 7) {
            var userGuess = event.key;
            var inLettersArray = letters.includes(userGuess);
            var inGuessedArray = guessed.includes(userGuess);
            if (event.keyCode === 116) {
                event.preventDefault();
                messageSays.innerHTML = "use the browser's refresh button";
                return;
            };
            if (inGuessedArray) {
                messageSays.innerHTML = "that letter was already guessed";
                return;
            };
            guessed.push(userGuess);
            if (inLettersArray) {
                matchIndex = letters.indexOf(userGuess);
                document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
                messageSays.innerHTML = "good guess";
                for (var j = matchIndex + 1; j < letters.length; j++) {
                    matchIndex++;
                    if (userGuess === document.getElementsByTagName("span")[matchIndex].innerHTML.charAt(0)) {
                        document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
                    };
                };
            } else {
                counter++;
                document.getElementById("game-state").innerHTML = counter;
                messageSays.innerHTML = "that is not a letter in the word";
            };
        };
        if (counter == 7) {
            messageSays.innerHTML = "you lose - press space to continue";
            gameOver();
        };

        // letter visibility check
        testVisibility();

        function testVisibility() {
            var isVisible = [];
            for (var k = 0; k < letters.length; k++) {
                var findVisible = document.getElementsByTagName("span")[k].style.visibility;
                if (findVisible === "visible") {
                    isVisible.push(k);
                    if (isVisible.length == letters.length) {
                        messageSays.innerHTML = "you win - press space to continue"
                        gameOver();
                    };
                };
            };
        };

        function gameOver() {
            document.onkeydown = function (event) {
                if (event.keyCode != 32) {
                    messageSays.innerHTML = "press space to continue";
                    return;
                };
                if (event.keyCode === 32) {
                    gameInitialize();
                };
            };
        };

    };
};

