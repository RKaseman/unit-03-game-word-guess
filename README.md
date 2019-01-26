# unit-03-game-word-guess

[Hedonometer Hangman](https://rkaseman.github.io/unit-03-game-word-guess/)

- [x] Browser-based game
- [x] JavaScript updates both:
  - [x] HTML
  - [x] CSS
- [x] Choose a theme (Classic Hangman)
- [x] Use key events to listen for the letters that your players will type
- [ ] Display the following on the page
  - [ ] Press any key to get started
  - [ ] Wins
  - [x] Number of Guesses Remaining -- not doing this since the hangman animation is its own score
  - [ ] Letters Already Guessed -- *may or may not do this since the game says a letter was already picked when repeated*
  - [x] After the user wins/loses the game should automatically choose another word and make the user play it
#
### Nice-to-haves added
- [x] The (what-the-hell-is-a ?) [HEDONOMETER](http://hedonometer.org/about.html) *!*
- [x] Classic Hangman scorekeeping animation using [Processing.js](http://processingjs.org/)
- [x] F5 key disabled
#
brought to you by:
- **HTML**
- **CSS**
- **JavaScript**
- **JQuery**
- **Processing.js**
#
I always keep RWD and media queries in mind. This project isn't far enough complete visually to worry about them yet.

This is my first use of CSS variables.

I added JQuery for the Ajax call to the Hedonometer website.

I was dismayed when I discovered the Hedonometer API hasn't been up and running for a while, so I had to get creative in order to use it at all. My code scrapes [their word list's top 25 happy words](http://hedonometer.org/words.html) for the selection set. I wanted to get the three top words every day for continual variation, but they're contained in a modal. If they can be scraped I'll figure out how but I don't want to get bogged down in one project for *too* long.
