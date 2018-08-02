
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

// generate a random word...
function wordGen() {
    // ...from array
    var wordPicked = Math.floor(Math.random() * wordArray.length);
    console.log("wordArray[wordPicked] " + wordArray[wordPicked]);
    // output of wordGen function
    return wordArray[wordPicked];
    var hideWord = document.createElement("INPUT");
    hideWord.setAttribute("type", "hidden");
    document.body.appendChild(hideWord);
    document.getElementById("newWord").innerHTML = wordGen();
}

document.onkeyup = function(event) {
    // Determines which key was pressed.
    var letterGuess = event.key;
    console.log(event.key);
    // var result = wordGen().charAt(4);
    // console.log(result);
    if (letterGuess === wordGen().charAt(4)) {
        document.getElementById("newWord").innerHTML = "test";
    }
    }

// function myFunction() {
//     var str = "HELLO WORLD";
//     var res = wordGen().charAt(4)
//     document.getElementById("demo").innerHTML = res;
// }

// if (letterGuess === wordGen().charAt(4)) {
//     document.getElementById("newWord").innerHTML = res;
// }


// function startHidden() {
//     var hideWord = document.createElement("INPUT");
//     hideWord.setAttribute("type", "hidden");
//     document.body.appendChild(hideWord);
//     document.getElementById("newWord").innerHTML = wordGen();
// }

// function myFunction2() {
//     document.getElementById("demo2").innerHTML = "Paragraph changed.";
// }

// function myFunction3() {
//     var str = "Hello World!";
//     var n = str.length;
//     document.getElementById("demo3").innerHTML = n;
// }

// function myFunction4() {
//     var x = document.getElementById("myInput").value;
//     document.getElementById("demo4").innerHTML = x;
// }

