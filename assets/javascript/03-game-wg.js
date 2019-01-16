
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
var counter = 0;
var matchIndex;

var wordPicked = Math.floor(Math.random() * wordArray.length);
console.log("wordArray[wordPicked] = " + wordArray[wordPicked]);
document.getElementById("game-state").innerHTML = counter;

function wordInitialize() {
    var lettersToGuess = wordArray[wordPicked].split("");
    console.log("lettersToGuess = " + lettersToGuess);
    var i;
    for (var i = 0; i < lettersToGuess.length; i++) {
        letters.push(lettersToGuess[i]);
        document.getElementById("word-to-guess").innerHTML = "<span>" + letters.join("</span><hr><span>") + "</span><hr>";
        // document.getElementsByTagName("span").innerHTML = "<hr>";
    }
}

wordInitialize();

console.log("letters = " + letters);

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("userGuess = " + userGuess);
    var inArray = letters.includes(userGuess);
    if (inArray) {
        matchIndex = letters.indexOf(userGuess);
        console.log("matchIndex = " + matchIndex);
        document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
        document.getElementById("message").innerHTML = "Good guess";
        // var j;
        for (var j = matchIndex + 1; j < letters.length; j++) {
            matchIndex++;
            console.log("matchIndex = " + matchIndex);
            console.log("span .innerHTML = " + document.getElementsByTagName("span")[matchIndex].innerHTML);
            if (userGuess === document.getElementsByTagName("span")[matchIndex].innerHTML) {
                console.log("span .innerHTML = " + document.getElementsByTagName("span")[matchIndex].innerHTML);
                document.getElementsByTagName("span")[matchIndex].style.visibility = "visible";
            }
        }
    } else {
        counter++;
        document.getElementById("game-state").innerHTML = counter;
        document.getElementById("message").innerHTML = "That is not a letter in the word";
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

