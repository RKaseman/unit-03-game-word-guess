
$(document).ready(function () {

    wordArray = [];

    // wordArray = [
    //     "first",
    //     "second",
    //     "third",
    //     "fourth",
    //     "fifth",
    //     "sixth",
    //     "seventh",
    //     "eigth"
    // ];

    $.get("https://hedonometer.org/words.html", function (data, status) {
        var hedonometer = $(data).load("div.container").children("div.row").children("#viewpanel").children(".tablesorter").children("tbody").children("tr").children("td:nth-of-type(1)").contents();
        for (var i = 0; i < hedonometer.length; i++) {
            wordArray.push(hedonometer[i].textContent);
        }
        console.log("status:", status);
    }).done(function () {
        console.log(".done, gameInitialize(),", wordArray.length);

        var matchIndex;
        var messageSays = document.getElementById("message");
        var singleLetters = document.getElementsByTagName("span");

        gameInitialize();

        function gameInitialize() {
            letters = [];
            guessed = [];
            counter = 0;
            var wordPicked = Math.floor(Math.random() * wordArray.length);
            console.log("wordArray[wordPicked]", wordArray[wordPicked] + " " + wordPicked);
            var lettersToGuess = wordArray[wordPicked].split("");
            document.getElementById("game-state").innerHTML = counter;
            messageSays.innerHTML = "pick your letter";
            for (var i = 0; i < lettersToGuess.length; i++) {
                letters.push(lettersToGuess[i]);
                document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("<hr></span><span>") + "<hr></span>";
            };
            wordArray.splice([wordPicked], 1);
            console.log("wordArray.length (new) =", wordArray.length);

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
                        singleLetters[matchIndex].style.visibility = "visible";
                        messageSays.innerHTML = "good guess";
                        for (var j = matchIndex + 1; j < letters.length; j++) {
                            matchIndex++;
                            if (userGuess === singleLetters[matchIndex].innerHTML.charAt(0)) {
                                singleLetters[matchIndex].style.visibility = "visible";
                            };
                        };
                    }
                    else {
                        counter++;
                        document.getElementById("game-state").innerHTML = counter;
                        messageSays.innerHTML = "that is not a letter in the word";
                    };
                };
                testVisibility();

                if (counter == 7) {
                    for (var x = 0; x < letters.length; x++) {
                        singleLetters[x].style.visibility = "visible";
                        singleLetters[x].style.color = "red";
                    };
                    messageSays.innerHTML = "you lose - press space to continue";
                    gameOver();
                };

                // letter visibility check
                function testVisibility() {
                    var isVisible = [];
                    for (var k = 0; k < letters.length; k++) {
                        var findVisible = singleLetters[k].style.visibility;
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
    });

});

