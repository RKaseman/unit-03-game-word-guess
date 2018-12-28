
var letters = [];
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

var wordPicked = Math.floor(Math.random() * wordArray.length);
console.log("wordArray[wordPicked] = " + wordArray[wordPicked]);

function wordInitialize() {
    var lettersToGuess = wordArray[wordPicked].split("");
    console.log("lettersToGuess = " + lettersToGuess);
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join(" ") + "</span>";
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
        document.getElementById("message").innerHTML = "That is not a letter in the word";
    } else {
        console.log("letters.indexOf(userGuess) = " + letters.indexOf(userGuess));
        document.getElementById("message").innerHTML = "Good guess";
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

