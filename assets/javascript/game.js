
function getRandomWord() {
    var words = [
      'Hello',
      'No',
      'Hi',
      'Banana',
      'Apple'
    ];
    var randomIndex = Math.floor(Math.random() * 10) % words.length;
    return words[randomIndex];
  }
  
  function print(str) {
    document.getElementById('new').innerHTML = str;
  }
  
  function process(){
    var word = getRandomWord();
    print(word)
  
  }
  process()
  document.getElementById('btnShow').addEventListener('click', process);

