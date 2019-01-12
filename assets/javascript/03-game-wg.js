
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
var counter = 0;

var wordPicked = Math.floor(Math.random() * wordArray.length);
console.log("wordArray[wordPicked] = " + wordArray[wordPicked]);
document.getElementById("game-state").innerHTML = counter;
console.log("gameState = " + document.getElementById("game-state").innerHTML);

function wordInitialize() {
    var lettersToGuess = wordArray[wordPicked].split("");
    console.log("lettersToGuess = " + lettersToGuess);
    var i;
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("</span><span>") + "</span>";
    }
}

wordInitialize();

console.log("letters = " + letters);

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("userGuess = " + userGuess);
    var inArray = letters.includes(userGuess);
    console.log("inArray = " + inArray);
    if (inArray === false) {
        counter++;
        console.log("counter++ = " + counter);
        document.getElementById("game-state").innerHTML = counter;
        console.log("gameState updated = " + document.getElementById("game-state").innerHTML);
        document.getElementById("message").innerHTML = "<span>That is not a letter in the word</span>";
        document.getElementById("message").style.backgroundColor = "#400808";
    } else {
        var matchIndex = letters.indexOf(userGuess);
        console.log("matchIndex = " + matchIndex);
        document.getElementById("message").innerHTML = "<span>Good guess</span>";
        console.log("span [matchIndex] = " + document.getElementsByTagName("span")[matchIndex].innerHTML);
        document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
    }
}

// // function myFunction() {
// //     var str = "HELLO WORLD";
// //     var res = wordGen().charAt(4)
// //     document.getElementById("demo").innerHTML = res;
// // }

// // if (letterGuess === wordGen().charAt(4)) {
// //     document.getElementById("newWord").innerHTML = res;
// // }

// // function startHidden() {
// //     var hideWord = document.createElement("INPUT");
// //     hideWord.setAttribute("type", "hidden");
// //     document.body.appendChild(hideWord);
// //     document.getElementById("newWord").innerHTML = wordGen();
// // }

